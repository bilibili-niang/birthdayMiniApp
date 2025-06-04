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
    await jwt.verify(ctx.request.header?.[headerAuth], salt, async (err: any, decode: any) => {
      if (err) {
        error(err)
        ctx.body = ctxBody(err)
      } else {
        await next()
      }
    })
  }
}

/*
* 鉴权中间件, 必须存在且没有过期
* */
export const jwtMust = async (ctx: Context, next: Next) => {
  try {
    const token = ctx.request.header?.[headerAuth] // 获取token
    // 使用 await 等待解码结果，这里假设 jwt.verify 支持 Promise 风格调用
    const decode = await new Promise((resolve, reject) => {
      jwt.verify(token, salt, (err, decoded) => {
        if (err) reject(err)
        else resolve(decoded)
      })
    })
    ctx.decode = decode
    // 继续下一个中间件或路由处理器
    await next()
  } catch (err) {
    // 如果验证失败，返回错误信息
    error(err)
    ctx.body = ctxBody(err)
  }
}