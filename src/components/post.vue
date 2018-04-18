<template>
  <div id="post">
    <div class='post-div'>
      Post by {{by}} {{at}} 
      <div>
        {{ content }}
      </div>
      <!-- <Comment>
        {{comment}}
      </Comment> -->
    </div> 
  </div>
</template>

<script>
import Comment from "./Comment";

export default {
  name: 'post',
  // components: {Comment},
  data() {
    return {
      content: "hey there",
      by: "Sindhu",
      at: "3 days ago",
      // comment: "commenta"
    };
  }
};
</script>

<style>

</style>
