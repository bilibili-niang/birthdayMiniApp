import { z } from 'koa-swagger-decorator'
import { commonResponse } from '@/controller/common'

// 创建简历的请求
const resumeCreateReq = z.object({
  userId: z.string(),
  data: z.string(),
  img: z.string(),
  title: z.string()
})

// 创建简历的响应
const resumeCreateRes = commonResponse({
  data: z.object({
    id: z.number(),
    userId: z.string(),
    data: z.string(),
    img: z.string(),
    title: z.string(),
    createdAt: z.string(),
    updatedAt: z.string()
  })
})

// 获取简历列表的响应
const resumeListRes = commonResponse({
  data: z.object({
    count: z.number(),
    rows: z.array(z.object({
      id: z.number(),
      userId: z.string(),
      data: z.string(),
      img: z.string(),
      title: z.string(),
      createdAt: z.string(),
      updatedAt: z.string()
    }))
  })
})

export type ResumeCreateReq = z.infer<typeof resumeCreateReq>
export type ResumeCreateRes = z.infer<typeof resumeCreateRes>
export type ResumeListRes = z.infer<typeof resumeListRes>

export {
  resumeCreateReq,
  resumeCreateRes,
  resumeListRes
}