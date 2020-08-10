import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
}).$mount('#app')


