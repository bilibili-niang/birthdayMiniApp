// koa的挂载和静态资源开放等
import koa from 'koa'
import indexRouter from '@/router/index'
import koaBody from 'koa-body'
import path from 'path'
import onError from 'koa-onerror'
import staticFiles from 'koa-static'
import { error, trace } from '@/config/log4j'
import { ctxBody } from '@/utils'
import { loggerMiddleware } from '@/middleware/loggerMiddleware'
import { jwtMiddleware } from '@/middleware'

const app = new koa()
// 监听错误的
onError(app, {
  json: function (err, ctx) {
    ctx.status = 500
    ctx.body = ctxBody({ msg: err.message })
  }
})
// 跨域
// @ts-ignore
app
  .use(koaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, '../upload'), //设置上传目录
      keepExtensions: true //保留拓展名
    }
  }))
  .use(loggerMiddleware)
  .use(async (ctx, next) => {
    // CORS 设置：允许本地开发的跨域与自定义头
    ctx.set('Access-Control-Allow-Origin', '*')
    // 允许前端发送的头，包含 Authorization 与 Blade-Auth 等
    const reqHeaders = ctx.get('Access-Control-Request-Headers')
    const allowHeaders = reqHeaders || 'Content-Type, Authorization, Blade-Auth'
    ctx.set('Access-Control-Allow-Headers', allowHeaders)
    ctx.set('Access-Control-Expose-Headers', 'Content-Type, Authorization, Blade-Auth')
    ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    // 预检请求直接返回，避免浏览器阻塞
    if (ctx.method === 'OPTIONS') {
      ctx.status = 204
      return
    }
    await next()
  })
  .use(jwtMiddleware)
  //开放html模板的静态目录,你可以把打包后的html文件放到这个目录下
  .use(staticFiles(path.join(__dirname, '../static/views/'), { extensions: ['html'] }))
  .use(staticFiles(path.join(__dirname, '../logs/'), { extensions: ['log'] }))
  // 开放上传目录作为静态资源，便于通过 /upload/filename 直接访问
  .use(staticFiles(path.join(__dirname, '../upload')))
  .use(indexRouter.routes())
  .on('error', async (err, ctx, next) => {
    ctx.status = 500
    error(JSON.stringify(err), {
      ip: ctx.ip,
      method: ctx.method,
      path: ctx.path,
      statusCode: ctx.status,
      headers: ctx.headers,
      payload: ctx.request.body ?? ctx.query,
      userAgent: ctx.headers['user-agent'] as string
    })
    ctx.body = ctxBody({ data: err })
  })
  .use((ctx, next) => {
    trace('未知url ' + ctx.request.url, {
      ip: ctx.ip,
      method: ctx.method,
      path: ctx.path,
      statusCode: 404,
      headers: ctx.headers,
      payload: ctx.request.body ?? ctx.query,
      userAgent: ctx.headers['user-agent'] as string
    })
    ctx.body = ctxBody({
      code: 500,
      msg: `这里是无人之境`,
    })
  })

export default app