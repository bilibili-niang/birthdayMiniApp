import { defineAction } from '../utils'

export default defineAction({
  key: 'wx-channels-profile',
  title: '微信视频号-主页',
  schema: {
    type: 'object',
    properties: {
      _: {
        type: 'null',
        pure: true,
        widget: () => {
          return (
            <div style="padding:12px">
              可前往{' '}
              <a target="__blank" href="https://channels.weixin.qq.com/">
                视频号助手
              </a>{' '}
              内查询配置所需参数
            </div>
          )
        }
      },
      finderUserName: {
        title: '视频号ID',
        type: 'string',
        description: (
          <div>
            <img
              style="width:800px;"
              src="https://dev-cdn.kacat.cn/upload/20240621/2b75b9402de8fdac279495c1302be8ec.jpg"
              alt=""
            />
          </div>
        ),
        required: true,
        config: {
          placeholder: '必填，请输入'
        }
      }
    }
  },
  default: {
    finderUserName: ''
  },
  handler: (config) => {}
})
