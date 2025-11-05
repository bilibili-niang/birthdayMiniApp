import { Context } from 'koa'
import path from 'path'
import fs from 'fs'
import { routeConfig, z } from 'koa-swagger-decorator'
import { ctxBody } from '@/utils'

type ImageItem = {
  url: string
  width: number
  height: number
  name?: string
  alias?: string
}

type SourceTab = {
  title: string
  icon?: string
  cover?: string
  col?: number
  sources: ImageItem[]
}

const isImage = (filename: string) => {
  return filename.match(/\.(png|jpg|jpeg|gif|webp|svg)$/i)
}

class IconsController {
  @routeConfig({
    method: 'get',
    path: '/icons/list',
    summary: '获取静态图标素材（按分类分组，支持 cate 过滤）',
    tags: ['资源', '图标'],
    request: {
      // 可选查询参数：按分类过滤返回结果
      query: z.object({
        cate: z.string().optional()
      })
    }
  })
  async list(ctx: Context) {
    try {
      // 与 app/index.ts 保持一致的静态目录定位
      const iconsRoot = path.join(__dirname, '../../static/icons')

      console.log('iconsRoot', iconsRoot)

      if (!fs.existsSync(iconsRoot)) {
        ctx.body = ctxBody({ success: true, code: 200, msg: '目录不存在，返回空列表', data: [] })
        return
      }

      const origin = ctx.origin || `${ctx.protocol}://${ctx.host}`
      const cateFromQuery = (ctx.query?.cate as string) || ''
      let categories = fs
        .readdirSync(iconsRoot)
        .filter((name) => fs.statSync(path.join(iconsRoot, name)).isDirectory())

      // 如果传入 cate，则仅返回该分类
      if (cateFromQuery) {
        categories = categories.filter((name) => name === cateFromQuery)
      }

      const data: SourceTab[] = categories.map((cate) => {
        const dir = path.join(iconsRoot, cate)
        const files = fs
          .readdirSync(dir)
          .filter((f) => fs.statSync(path.join(dir, f)).isFile())
          .filter((f) => !!isImage(f))

        const sources: ImageItem[] = files.map((f) => ({
          // 注意：不带域名，前端会按环境变量拼接域名
          url: `${origin}/${cate}/${f}`,
          width: 400,
          height: 400,
          name: f,
          alias: ''
        }))

        return {
          title: cate,
          sources
        }
      })

      ctx.body = ctxBody({ success: true, code: 200, msg: '获取图标素材成功', data })
    } catch (e: any) {
      ctx.body = ctxBody({ success: false, code: 500, msg: '获取图标素材失败', data: e?.message || e })
    }
  }
}

export { IconsController }