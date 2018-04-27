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
import { bus } from './main.js'
export default {
  name: "poster",
  components: {homeMenu, navbar, posts, side},
  methods: {
  },
  watch: {
    '$route': function(to, from) {
      console.log('in app.vue watching $route from to ', from.path, to.path)
    }
  }
}

</script>

<style>
body{
  font-family: IBMPlexSans, sans-serif;
  margin: 0;
}
</style>
