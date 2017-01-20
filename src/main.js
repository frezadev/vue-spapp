// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import Chart from './components/Chart'
import List from './components/List'
import ListVuex from './components/ListVuex'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/chart', component: Chart },
    { path: '/list', component: List },
    { path: '/listvuex', component: ListVuex }
  ],
  redirect: [
    { path: '*', component: Home }
  ]
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router: router,
  components: { App }
})
