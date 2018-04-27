<template>
  <div id = 'focus'>
    <img class='img_focused' :src="img_src" alt="">
  </div>
</template>

<script>
import {bus} from '../main.js'

export default {
  name: 'focus',
  data() {
    return {
      img_src: ''
    }
  },
  created(){
    bus.$on('focused', post => {
      this.img_src = post
      console.log('$on focused', post)
    })
  },
  methods: {
  }

}
</script>

<style>
.img_focused{
  height: 300px;
  width: 300px;
}
</style>
