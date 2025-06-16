import { z } from 'koa-swagger-decorator'

const resumeCreateReq = z.object({
  userId: z.string(),
  data: z.string(),
  img: z.string(),
  title: z.string()
})
export type ResumeCreateReq = z.infer<typeof resumeCreateReq>
export {
  resumeCreateReq
}