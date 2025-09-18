import { defineComponent, onUnmounted } from 'vue'
import { useSearchTable, useTableAction } from '../../../components/search-table'
import { useProfileFieldsMap } from '../fields'
import {
  $createUserProfile,
  $deleteUserProfile,
  $getUserProfileList,
  $updateUserProfile
} from '../../../api/user-profile'
import emitter from '../../../utils/emitter'
import { Button } from '@kacat/ui'
import useCrud from '../../../hooks/useCrud'

export default defineComponent({
  name: '',
  setup() {
    const { Table, refresh } = useSearchTable({
      title: '会员列表',
      customRequest: (params) => {
        return $getUserProfileList(params)
      },
      toolbar: (
        <Button
          type="primary"
          onClick={() => {
            onCreate()
          }}
        >
          新建用户
        </Button>
      ),
      filter: {
        list: [
          {
            label: '用户手机号',
            key: 'phone',
            type: 'input',
            fixed: true,
            flex: 4
          },
          {
            label: '用户姓名',
            key: 'name',
            type: 'input',
            fixed: true,
            flex: 4
          },
          {
            label: '创建时间',
            key: 'createTime',
            type: 'range-picker',
            fixed: true
          },
          {
            label: '更新时间',
            key: 'updateTime',
            type: 'range-picker',
            fixed: true
          }
        ]
      },
      table: {
        columns: [
          // { dataIndex: 'id', title: 'ID', width: 200 },
          { dataIndex: 'userPhone', title: '用户手机号', width: 130 },

          ...Object.keys(useProfileFieldsMap).map((key) => {
            const item = (useProfileFieldsMap as any)[key]
            return { dataIndex: item.key, title: item.title, width: 150, ...item.tableRender }
          }),

          // { dataIndex: 'name', title: '用户姓名', width: 150 },
          // { dataIndex: 'phone', title: '用户手机号', width: 200 },
          // { dataIndex: 'birthday', title: '生日', width: 200 },
          // { dataIndex: 'address', title: '地址', width: 250 },
          { dataIndex: 'createTime', title: '创建时间', width: 200 },
          { dataIndex: 'updateTime', title: '更新时间', width: 200 },
          {
            dataIndex: 'action',
            title: '操作',
            width: 100,
            fixed: 'right',
            customRender({ record }) {
              if (props.asSelector) {
                return (
                  <Button
                    type="primary"
                    onClick={() => {
                      props.onSelect({
                        id: record.userId,
                        userId: record.userId,
                        name: record.infoContent?.name ?? record.nickName,
                        phone: record.phone,
                        avatar: record.avatar
                      })
                    }}
                  >
                    选择
                  </Button>
                )
              }
              return useTableAction({
                list: [
                  {
                    title: '编辑',
                    onClick: () => {
                      onUpdate({ id: record.id, ...record.infoContent, phone: record.phone })
                    }
                  },
                  {
                    title: '删除',
                    type: 'danger',
                    onClick: () => {
                      onRemove(() => {
                        return $deleteUserProfile(record.id)
                      }, refresh)
                    }
                  }
                ]
              })
            }
          }
        ]
      }
    })

    emitter.on('user-profile-refresh', refresh)

    onUnmounted(() => {
      emitter.off('user-profile-refresh', refresh)
    })

    const { onCreate, onUpdate, onRemove } = useCrud({
      title: '用户信息',
      defaultValue() {
        return {}
      },
      schema: {
        type: 'object',
        properties: {
          phone: {
            title: '用户手机号',
            type: 'string',
            required: true,
            config: {
              placeholder: '请输入用户手机号'
            }
          },
          ...Object.fromEntries(Object.entries(useProfileFieldsMap).map(([key, i]) => [key, i.schema]))
        }
      },
      onCreate(value) {
        const { phone, ...profile } = value
        return $createUserProfile(phone, profile).finally(refresh)
      },
      onUpdate(value) {
        const { id, phone, ...profile } = value
        return $updateUserProfile(id, profile).finally(refresh)
      }
    })

    return () => {
      return Table
    }
  }
})
