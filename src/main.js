import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

let toastrConfigs = {
  position: 'top right',
  showDuration: 500,
  errorColor: "#fc5c65",
  timeOut: 2000,
}

Vue.use(CxltToastr, toastrConfigs)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
