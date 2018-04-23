<template>
  <div id="poster">
    <homeMenu></homeMenu>
    <navbar></navbar>
    <!-- <p>subred {{$route.params.subred_id}}</p>
    <p>user {{$route.params.user_id}}</p>
    <p>cat {{$route.params.cat_id}}</p> -->
    <div class='container'>
      <post id=post-div></post>
      <router-view></router-view>
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
  components: {homeMenu, navbar, post, side},
  methods: {
    goto() {
      console.log('goto')
      this.$router.push('/r/politics')
    }
  },
  watch: {
    '$route': function(from, to) {
      console.log('watching $route from to ', from.path, to.path)
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
