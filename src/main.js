//AIzaSyAawqynMywLGwnPkoJb8XzYxn60YVrixrc
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'mdbootstrap/css/mdb.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
//import $ from 'jquery'

//import x5GMaps from 'x5-gmaps'
import { routes } from './routes'
import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAawqynMywLGwnPkoJb8XzYxn60YVrixrc',
  },
})

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// const GOOGLE_KEY=''
// Vue.use(x5GMaps, { key: GOOGLE_KEY, libraries: ['visualization'] })

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode : 'history'
})



new Vue({
  created () {
    AOS.init()
  },
  render: h => h(App),
  router,
}).$mount('#app')



