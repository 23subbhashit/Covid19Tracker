import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'mdbootstrap/css/mdb.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import x5GMaps from 'x5-gmaps'
import { routes } from './routes'

const GOOGLE_KEY=''
Vue.use(x5GMaps, { key: GOOGLE_KEY, libraries: ['visualization'] })

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode : 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')



