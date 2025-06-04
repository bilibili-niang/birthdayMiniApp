import { Context } from 'koa'
import { body, middlewares, ParsedArgs, responses, routeConfig } from 'koa-swagger-decorator'
import { CreateUserReq, CreateUserRes, DeleteUserQuery, DeleteUserRes, IDeleteUserQuery, } from './type'
import { ICreateUserReq } from '@/controller/User/type'
import User from '@/schema/user'
import { ctxBody, deleteByIdMiddleware, paginationMiddleware } from '@/utils'
import { headerParams, paginationQuery } from '@/controller/common/queryType'
import { jwtMust } from '@/middleware'


class UserController {

  @routeConfig({
    method: 'post',
    path: '/user/create',
    summary: '创建用户',
    tags: ['用户'],

  })
  @body(CreateUserReq)
  @responses(CreateUserRes)
  async CreateUser(ctx: Context, args: ParsedArgs<ICreateUserReq>) {
    await User.create(args.body)
      .then((res: any) => {
        ctx.body = ctxBody({
          success: true,
          code: 200,
          msg: '创建用户成功',
          data: res
        })
      })
      .catch(e => {
        ctx.body = ctxBody({
          success: false,
          code: 500,
          msg: '创建用户失败',
          data: e?.errors?.[0]?.message
        })
      })
  }

  @routeConfig({
    method: 'post',
    path: '/user/login',
    summary: '用户登录',
    tags: ['用户', '登录']
  })
  @body(CreateUserReq)
  @responses(CreateUserRes)
  async UserLogin(ctx: Context, args: ParsedArgs<ICreateUserReq>) {

    const loginError = e => {
      return ctxBody({
        success: false,
        code: 500,
        msg: '用户登录失败',
        data: e
      })
    }

    await User.findOne({ where: args.body })
      .then((res: any) => {
        if (res) {
          ctx.body = ctxBody({
            success: true,
            code: 200,
            msg: '用户登录成功',
            data: res
          })
        } else {
          ctx.body = loginError(res)
        }
      })
      .catch(e => {
        ctx.body = loginError(e)
      })
  }


  @routeConfig({
    method: 'get',
    path: '/user/list',
    summary: '用户列表',
    tags: ['用户'],
    request: {
      headers: headerParams(),
      query: paginationQuery()
    },
  })
  @middlewares([
    jwtMust
  ])
  @responses(CreateUserRes)
  async getUserList(ctx: Context, args: ParsedArgs<ICreateUserReq>) {
    await paginationMiddleware(ctx, User, '查询用户列表')
  }

  @routeConfig({
    method: 'delete',
    path: '/user/delete',
    summary: '删除指定用户',
    tags: ['用户'],
    request: {
      headers: headerParams(),
      query: DeleteUserQuery
    }
  })
  @middlewares([
    jwtMust
  ])
  @responses(DeleteUserRes)
  async deleteUser(ctx: Context, args: ParsedArgs<IDeleteUserQuery>) {
    await deleteByIdMiddleware(ctx, User, '用户')
  }
}

export { UserController }
