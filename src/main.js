import Vue from 'vue'
import { Button, Select, Input } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './Addition.vue'

Vue.use(Button)
Vue.use(Input)

new Vue({
  el: '#addition',
  render: h => h(App)
})
