import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueKinesis from 'vue-kinesis'
Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.use(VueKinesis)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
