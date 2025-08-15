import { z } from 'koa-swagger-decorator'
import { commonResponse } from '@/controller/common'

/*
* 翻译接口传参
* */
const TranslateReqType = z.object({
  keyword: z.string(),
})
/*
* 翻译接口响应参数
* */
const TranslateResType = commonResponse({
  keyword: z.string(),
  result: z.string(),
})

export {
  TranslateReqType,
  TranslateResType
}

