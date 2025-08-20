import { body, responses, routeConfig } from 'koa-swagger-decorator'
import { Context } from 'koa'
import { TranslateReqType, TranslateResType } from './type'
import { $transform } from '@/service/tool'
import { ctxBody } from '@/utils'

class ToolController {

  @routeConfig({
    method: 'post',
    path: '/tool/translate',
    summary: '翻译',
    tags: ['工具', '翻译'],
  })
  @body(TranslateReqType)
  @responses(TranslateResType)
  async translateWord(ctx: Context, args) {
    const { keyword } = args.body
    await $transform(keyword)
      .then(res => {
        ctx.body = ctxBody({
          success: true,
          code: 200,
          msg: `翻译一下`,
          data: res
        })
      })

  }

}

export {
  ToolController
}