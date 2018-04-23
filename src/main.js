import Vue from 'vue'
import App from './App.vue'
import router from './navigation/routes'

let vueInstance = new Vue({
  el: '#app',
  render: h => h(App),
  router
})