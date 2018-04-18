<template>
  <div id="poster">
    <homeMenu></homeMenu>
    <navbar></navbar>
    <post></post>
  </div>
</template>

<script>
import Vue from "vue";
import post from "./components/post";
import navbar from "./components/navbar";
import homeMenu from "./components/home";

export default {
  name: "poster",
  components: {homeMenu, navbar, post}
}
</script>

<style>

</style>
