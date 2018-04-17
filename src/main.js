import Vue from 'vue'
import App from './App.vue'

let vueInstance = new Vue({
  el: '#app',
  render: h => h(App)
})

console.log(App)
console.log(vueInstance)
