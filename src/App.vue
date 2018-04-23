<template>
  <div id="poster">
    <homeMenu></homeMenu>
    <navbar></navbar>
    <span style="font-size:30px;cursor:pointer" v-on:click="openNav()">&#9776; open</span>
    <!-- <p>subred {{$route.params.subred_id}}</p>
    <p>user {{$route.params.user_id}}</p>
    <p>cat {{$route.params.cat_id}}</p> -->
    <div class='container'>
      <post id=post-div></post>
      <router-view></router-view>
      <side id=side-div></side>
    </div>
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">&times;</a>
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
    },
    openNav() {
        document.getElementById("mySidenav").style.width = "73%";
    },
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
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

.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    /* background-color: white; */
    background: linear-gradient(to bottom right, white,rgb(93, 250, 250));
    overflow-x: hidden;
    transition: 0.8s;
    padding-top: 60px;
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.5s;
}

.sidenav a:hover {
    color: #f1f1f1;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
