import Vue from 'vue'
import { Button, Select, InputNumber } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './Addition.vue'

Vue.use(Button)
Vue.use(InputNumber)

new Vue({
  el: '#addition',
  render: h => h(App)
})
