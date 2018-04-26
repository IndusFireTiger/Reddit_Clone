<template>
  <div id = 'focus'>
    card focused post
  </div>
</template>

<script>
import {bus} from '../main.js'

export default {
  name: 'focus',
  created(){
    bus.$on('focused', post => {
      console.log('$on focused')
    })
  }
}
</script>

<style>

</style>
