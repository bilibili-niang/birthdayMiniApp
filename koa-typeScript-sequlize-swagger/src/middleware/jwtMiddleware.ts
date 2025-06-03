import jwt from 'jsonwebtoken'
import { Context, Next } from 'koa'
import { ctxBody, jwtDecryption } from '@/utils'
import { headerAuth } from '@/controller/common'
import { error } from '@/config/log4j'
// 接口的鉴权中间件
export const jwtMiddleware = async (ctx: Context, next: Next) => {
  if (!ctx.request.header?.[headerAuth]) {
    await next()
  } else {
    const jetResult = jwtDecryption(ctx.request.header?.[headerAuth] + '')
    console.log('jetResult', jetResult)

  }
}

// 鉴权中间件,必须存在且没有过期
export const jwtMust = async (ctx: Context, next: Next) => {

  console.log('ctx.request.header=>')
  console.log(ctx.request.header.bladeauth)
  jwt.verify(ctx.request.header?.[headerAuth], 'secret', (err, decode) => {
    if (err) {
      error(err)
      ctx.body = ctxBody(err)
    } else {
      console.log(decode)
    }

  })

  /*  const jetResult = jwtDecryption(ctx.request.header?.bladeauth + '')
    if (!jetResult) {
      await next()
    } else {
      ctx.body = ctxBody(jetResult)
      /!*ctx.body = ctxBody({
        code: 401,
        message: `${headerAuth}不存在或已过期`,
        data: jetResult
      })*!/
    }*/
}