import { routeConfig, z } from 'koa-swagger-decorator'
import { Op } from 'sequelize'
import { ctxBody, formatDateTime } from '@/utils'
import SystemPage from '@/schema/systemPage'

class DecorateController {
  @routeConfig({
    method: 'get',
    path: '/decorate/customize/list',
    summary: '自定义装修页面列表（分页）',
    tags: ['装修-自定义装修'],
    request: {
      query: z.object({
        scene: z.string().optional(),
        name: z.string().optional(),
        // 仅返回已装修的页面（decorate 非空）；默认 true
        onlyDecorated: z.coerce.boolean().default(true),
        size: z.coerce.number().default(20).transform(v => (v > 0 ? v : 20)),
        page: z.coerce.number().default(1).transform(v => (v > 0 ? v : 1))
      })
    }
  })
  async customizeList(ctx: any) {
    try {
      const { size, page, name, scene, onlyDecorated } = ctx.parsed.query as any

      const where: any = {}
      if (name) where.name = { [Op.like]: `%${name}%` }
      if (scene) where.scene = scene
      if (onlyDecorated) {
        // 仅返回有装修配置的页面
        where.decorate = { [Op.not]: null }
      }

      const limit = Number(size) || 20
      const offset = (Number(page) - 1) * limit

      const { count, rows } = await SystemPage.findAndCountAll({
        where,
        limit,
        offset,
        order: [['updatedAt', 'DESC']]
      })

      const total = count
      const pages = Math.ceil(total / limit)
      const records = (rows || []).map((row: any) => ({
        id: row.id,
        name: row.name,
        scene: row.scene,
        editUser: row.editUser,
        description: row.description,
        key: row.key,
        title: row.title,
        version: row.version,
        createTime: formatDateTime(row.createdAt),
        updateTime: formatDateTime(row.updatedAt)
      }))

      ctx.body = ctxBody({
        success: true,
        code: 200,
        msg: '获取自定义装修页面列表成功',
        data: {
          countId: '',
          current: Number(page),
          maxLimit: limit,
          optimizeCountSql: true,
          orders: [],
          pages,
          records,
          searchCount: true,
          size: limit,
          total
        }
      })
    } catch (e: any) {
      ctx.body = ctxBody({ success: false, code: 500, msg: '获取自定义装修页面列表失败', data: e?.message || e })
    }
  }
}

export { DecorateController }