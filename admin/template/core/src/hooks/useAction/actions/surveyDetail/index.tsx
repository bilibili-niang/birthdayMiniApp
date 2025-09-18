import { defineAction } from '../../utils'
import { useCommonSelector } from '../../../../../lib'
import { SurveyList } from '@kacat/cs-marketing'

export default defineAction({
  key: 'survey-detail',
  title: '跳转指定问卷',
  schema: {
    type: 'object',
    properties: {
      surveyId: {
        title: '目标问卷',
        type: 'string',
        widget: useCommonSelector({
          widget: SurveyList
        }),
        config: {
          placeholder: '请输入问卷ID'
        }
      }
    }
  }
})
