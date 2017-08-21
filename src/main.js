import Vue from 'vue'
import { Button, Select } from 'element-ui'
import App from './Addition.vue'

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
/* or
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#addition',
  render: h => h(App)
})
