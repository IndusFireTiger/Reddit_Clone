<template>
  <div id="poster">
    <homeMenu></homeMenu>
    <navbar></navbar>
    <posts></posts>
  </div>
</template>

<script>
import Vue from "vue";
import posts from "./components/posts";
import navbar from "./components/navbar";
import homeMenu from "./components/home";
import side from "./components/side";

export default {
  name: "poster",
  components: {homeMenu, navbar, posts, side},
  methods: {
    goto() {
      console.log('goto')
      this.$router.push('/r/politics')
    }    
  },
  watch: {
    '$route': function(from, to) {
      console.log('in app.vue watching $route from to ', from.path, to.path)
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate-------------------', from.path, to.path)
  }
}

</script>

<style>
body{
  font-family: IBMPlexSans, sans-serif;
  margin: 0;
}
</style>
