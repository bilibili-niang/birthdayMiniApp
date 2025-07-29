import { createVuetify } from 'vuetify'
import 'vuetify/styles' //vuetify全局样式文件
import colors from 'vuetify/lib/util/colors'

console.log('colors')
console.log(colors)
const vuetify = createVuetify({
  styles: {
    configFile: 'src/styles/settings.scss',
  },
})
export default vuetify