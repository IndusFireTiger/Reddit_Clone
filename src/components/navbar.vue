<template>
  <div id="navbar">
  </div>
</template>

<script>
import Vue from 'vue'
Vue.component("navbar", {
  template: '<p>nav</p>',
  data(){
      return {
          options: ['mode','subreddits']
      }
  }
})
</script>

<style>

</style>
