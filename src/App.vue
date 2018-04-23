<template>
  <div id="poster">
    <homeMenu></homeMenu>
    <navbar></navbar>
    <div class='container'>
      <post id=post-div></post>
      <side id=side-div></side>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import post from "./components/post";
import navbar from "./components/navbar";
import homeMenu from "./components/home";
import side from "./components/side";

export default {
  name: "poster",
  components: {homeMenu, navbar, post, side}
}
</script>

<style>
body{
  font-family: IBMPlexSans, sans-serif;
  margin: 0;
}
#post-div{
  /* float: left; */
}
#side-div{
  /* float: right; */
}
.container{
  display: grid;
  grid-template: 'post-div side-div';
  padding:5px;
}
</style>
