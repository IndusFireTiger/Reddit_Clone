<template>
  <div id="posts">
    <homeMenu></homeMenu>
    <navbar></navbar>
    <post></post>
    <post></post>
    <post></post>
    <post></post>
    <post></post>
  </div>
</template>

<script>
import Vue from "vue";
import post from "./components/post";
import navbar from "./components/navbar";
import homeMenu from "./components/home";

new Vue({
  el: "posts"
});
</script>

<style>
.post-div {
  border-color: black;
  border: solid;
  padding: 5px;
  margin: 10px;
}
</style>
