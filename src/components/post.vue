<template>
  <div id="post">
    <!-- <Comment v-for="comment in comments" :key="comment.id" :user="comment.user" :created="comment.created" :content="comment.content"></Comment> -->
      
  </div>
</template>

<script>
import Vue from 'vue'
import Comment from './Comment'
console.log('Comment Commponent',Comment)
// console.log('Comment Commponent',Comment instanceof)
let postcomp = Vue.component("post", {
  props: ["title"],
  template: "<div class='post-div'>Post by {{by}} {{at}} <div>{{ content }}</div><Comment>{{comment}}</Comment></div>",
  data(){
      return {
          content: 'hey there',
          by: 'Sindhu',
          at: '3 days ago',
          comment: "commenta"
      }
  }
})

console.log('post Commponent',postcomp)
</script>

<style>

</style>
