import { body, responses, routeConfig } from 'koa-swagger-decorator'
import { Context } from 'koa'
import { ctxBody } from '@/utils'
import { generateByDataSchema, DataSchemaSpec } from '@/utils/fake'
import { FakeGenerateReq, FakeGenerateRes, IFakeGenerateReq } from './type'

class FakeApiController {
  @routeConfig({
    method: 'post',
    path: '/fakeApi/generate',
    summary: '根据 dataSchema 生成测试数据',
    tags: ['测试', 'fakeApi']
  })
  @body(FakeGenerateReq)
  @responses(FakeGenerateRes)
  async generate(ctx: Context, args: { body: IFakeGenerateReq }) {
    try {
      const { dataSchema, count = 10 } = args.body || ({} as IFakeGenerateReq)
      if (!dataSchema || !dataSchema.type || !dataSchema.schema) {
        ctx.body = ctxBody({
          success: false,
          code: 400,
          msg: '缺少有效的 dataSchema'
        })
        return
      }

      const spec: DataSchemaSpec = {
        type: dataSchema.type,
        schema: dataSchema.schema
      }

      const result = generateByDataSchema(spec, count)

      // 数组时使用后端统一返回结构；对象直接返回对象
      ctx.body = ctxBody({
        success: true,
        code: 200,
        msg: '生成测试数据成功',
        data: spec.type === 'array' ? result : result
      })
    } catch (e: any) {
      ctx.body = ctxBody({
        success: false,
        code: 500,
        msg: '生成测试数据失败',
        data: e?.message || e
      })
    }
  }
}

export { FakeApiController }