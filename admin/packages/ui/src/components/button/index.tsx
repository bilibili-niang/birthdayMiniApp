import './index.scss'

// 创建一个简单的 Button 组件
export const Button = {
  name: 'UiButton',
  inheritAttrs: false,
  
  render() {
    // 使用 this.$attrs 获取所有属性
    // 使用 this.$slots 获取插槽内容
    // 使用 this.$emit 触发事件
    const { $attrs, $slots, $emit } = this as any
    
    const handleClick = (e: Event) => {
      $emit('click', e)
    }
    
    return (
      <button
        {...$attrs}
        class="ui-button"
        onClick={handleClick}
      >
        {$slots.default?.()}
      </button>
    )
  }
}

// 默认导出以保持向后兼容
export default Button
