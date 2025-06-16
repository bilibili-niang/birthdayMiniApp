import { Context } from 'koa'
import { body, middlewares, ParsedArgs, routeConfig } from 'koa-swagger-decorator'
import { ctxBody } from '@/utils'
import { resumeCreateReq } from './type'
import { headerParams } from '@/controller/common'
import { jwtMust, validateUserExist } from '@/middleware'
import { Resume } from '@/schema'

class ResumeController {
  @routeConfig({
    method: 'post',
    path: '/resume/create',
    summary: '创建简历',
    tags: ['简历'],
    request: {
      headers: headerParams(),
    }
  })
  // @body(resumeCreateReq)
  @middlewares([
    jwtMust,
    validateUserExist
  ])
  async createResume(ctx: Context, args: ParsedArgs<any>) {
    await Resume.create(args.body)
      .then((res: any) => {
        ctx.body = ctxBody({
          success: true,
          code: 200,
          msg: '创建成功',
          data: res
        })
      })
      .catch(e => {
        ctx.body = ctxBody({
          success: false,
          code: 500,
          msg: '创建失败',
          data: e?.errors?.[0]?.message
        })
      })
  }
}

export {
  ResumeController
}
