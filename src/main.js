import Vue from 'vue'
import App from './App.vue'
import router from './navigation/routes'

export const bus = new Vue()

let vueInstance = new Vue({
  el: '#app',
  render: h => h(App),
  router
})