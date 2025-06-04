import jwt from 'jsonwebtoken'
import { Context, Next } from 'koa'
import { ctxBody } from '@/utils'
import { headerAuth } from '@/controller/common'
import { error } from '@/config/log4j'
import { salt } from '@/constant'
// 接口的鉴权中间件
export const jwtMiddleware = async (ctx: Context, next: Next) => {
  if (!ctx.request.header?.[headerAuth]) {
    await next()
  } else {
    jwt.verify(ctx.request.header?.[headerAuth], salt, async (err, decode) => {
      if (err) {
        error(err)
        ctx.body = ctxBody(err)
      } else {
        await next()
      }
    })
  }
}

// 鉴权中间件,必须存在且没有过期
export const jwtMust = async (ctx: Context, next: Next) => {

  console.log('ctx.request.header=>')
  console.log(ctx.request.header.bladeauth)
  jwt.verify(ctx.request.header?.[headerAuth], salt, (err, decode) => {
    if (err) {
      error(err)
      ctx.body = ctxBody(err)
    } else {
      console.log(decode)
    }

  })
}