import Vue from 'vue'
import 'babel-polyfill'
import App from './App.vue'
import Home from './Home.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify)
Vue.use(VueRouter)


const routes = [
  { path: '*', component: Home },
]

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
