import { Context } from 'koa'
import { body, middlewares, ParsedArgs, responses, routeConfig } from 'koa-swagger-decorator'
import { ctxBody } from '@/utils'
import { resumeCreateReq, resumeListRes } from './type'
import { jwtMust, validateUserExist } from '@/middleware'
import { headerParams, paginationQuery } from '@/controller/common'
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
  @body(resumeCreateReq)
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

  @routeConfig({
    method: 'get',
    path: '/resume/list',
    summary: '获取用户简历列表',
    tags: ['简历'],
    request: {
      headers: headerParams(),
      query: paginationQuery()
    }
  })
  @middlewares([
    jwtMust
  ])
  @responses(resumeListRes)
  async getResumeList(ctx: Context, args: ParsedArgs<any>) {
    try {
      // 从ctx.decode中获取当前登录用户的ID
      const userId = ctx.decode.id
      // 修改Sequelize查询参数，增加用户ID筛选
      const { size, page } = ctx.parsed.query
      // 执行分页查询，只返回当前用户的简历
      await Resume.findAndCountAll({
        limit: Number(size),
        offset: Number((page - 1) * size),
        where: {
          userId
        }
      })
        .then((res: any) => {
          ctx.body = ctxBody({
            success: true,
            code: 200,
            msg: '获取简历列表成功',
            data: res
          })
        })
        .catch(e => {
          ctx.body = ctxBody({
            success: false,
            code: 500,
            msg: '获取简历列表失败',
            data: e?.message || '服务器错误'
          })
        })
    } catch (e) {
      ctx.body = ctxBody({
        success: false,
        code: 500,
        msg: '获取简历列表失败',
        data: e?.message || '服务器错误'
      })
    }
  }
}

export {
  ResumeController
}
