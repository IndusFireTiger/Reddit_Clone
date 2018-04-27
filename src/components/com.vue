<template>
    <div id='com'  class='comment'>
        <div  v-for = '(com, i) in comments' v-bind:key= com.id :id='i'>
            <div>
              <p>{{com.author}}</p>
            </div>
            <div>
              <p>{{com.body}}</p>
            </div>
            <div v-if="com.replies != undefined">
                <button @click='showReplies(com, i)'>Show Replies</button>
                <!-- <comment></comment> -->
            </div>
                <div v-else>
                <p>no replies</p>
                </div>            
            </div>
        </div>
</template>

<script>
export default {
  name: "com",
  data() {
    return {
      comments
    };
  }
};
</script>

<style>

</style>
