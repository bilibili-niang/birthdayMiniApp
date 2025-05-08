import { toRaw } from 'vue'
import Taro from '@tarojs/taro'
import { commonActions, emitter, useLogin, useQuickMenu, useToast, useUserStore } from '@kacat/core'
import { backToIndex } from '../../router'

type ActionDefine = {
  key: string
  title: string
  handler: (config?: any) => void
}

const actions: ActionDefine[] = [
  { key: 'home', title: '返回首页', handler: backToIndex },
  // { key: 'life', title: '生活圈', handler: backToLife },
  // { key: 'profile', title: '返回个人中心', handler: backToProfile },
  { key: 'menu', title: '快捷菜单', handler: useQuickMenu },
  { key: 'login', title: '登录', handler: useLogin },
  ...Object.values(commonActions),
  {
    key: 'weapp',
    title: '打开小程序',
    handler: config => {
      if (process.env.TARO_ENV === 'h5') {
        // TODO h5打开小程序
        Taro.showToast({
          icon: 'none',
          title: '请在小程序打开'
        })
      } else {
        Taro.navigateToMiniProgram({
          appId: config.appId,
          path: config.path.replace('.html', '')
        })
      }
    }
  },
]

export type Action = {
  key: string
  remark?: string
  config?: Record<string, any> & {
    __preCondition?: PreConditionDefine
  }
}

type PreConditionDefine = Record<string, any> & {
  isLogin?: { enable: boolean; message: string; handler: 'none' | 'login' }
  isPartyMember?: { enable: boolean; message: string; handler: 'none' | 'partyMemberAuth' }
  isPersonalAuth?: { enable: boolean; message: string; handler: 'none' | 'personalAuth' }
  isVolunteer?: { enable: boolean; message: string; handler: 'none' | 'volunteerAuth' }
}

const useAction = (action?: Action) => {
  if (!action) {
    return void 0
  }
  if (!(action?.key?.length > 0)) {
    console.log('未定义动作：', toRaw(action))
    return void 0
  }
  const targetAction = actions.find(item => item.key === action.key)
  if (!targetAction) {
    console.error('找不到对应动作定义', toRaw(action))
    return void 0
  }

  // 校验前置条件
  const preCondition = action.config?.__preCondition

  usePreCondition(preCondition, () => {
    targetAction.handler?.(action.config)
  })
}

emitter.on('useAction', useAction)

// 使用条件
const usePreCondition = (preCondition: PreConditionDefine | undefined | null, handler: () => void) => {
  if (!preCondition) {
    handler()
    return void 0
  }

  const { isLogin } = preCondition

  const userStore = useUserStore()

  // 最好使用 enable === true 来判断

  if (isLogin && isLogin.enable && !userStore.isLogin) {
    // toast提示
    isLogin.message?.length > 0 && useToast(isLogin.message)
    // 触发登录弹窗
    isLogin.handler === 'login' && useLogin()
    // 可以考虑使用 .then(usePreCondition(preCondition, handler)) 实现登录后无缝衔接，不需要再点击触发动作
    return void 0
  }

  handler()
}

export default useAction
