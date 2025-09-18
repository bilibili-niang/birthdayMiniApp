import './style.scss'
// @ts-ignore
export default (props, { attrs }) => {
  return (
    <div class="c_spin" {...attrs}>
      <div class="c_spin__container">
        <div class="c_spin__image"></div>
      </div>
    </div>
  )
}
