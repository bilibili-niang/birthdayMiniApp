import { Radio } from '@kacat/ui'
import useModal from '../useModal'
import { ComputedValue, useComputedValue } from '../useComputedValue'
import './style.scss'

export const useSelect = (options: {
  title?: string
  value?: ComputedValue<any>
  options: ComputedValue<{ label: string; value: any }[]>
  onSuccess?: (v: any) => void
}) => {
  const value = useComputedValue(options.value)

  const onChange = (v: any) => {
    options.onSuccess?.(v)
  }

  const optionsRef = useComputedValue(options.options)

  const modal = useModal({
    title: options.title || '请选择',
    height: 'auto',
    content: () => {
      return (
        <div class="use-select__list">
          {optionsRef.value.map(item => {
            return (
              <div
                class="use-select__item"
                onClick={() => {
                  modal.close()
                  onChange(item.value)
                }}
              >
                <Radio checked={item.value === value.value}></Radio>
                <div class="text">{item.label}</div>
              </div>
            )
          })}
        </div>
      )
    }
  })
}
