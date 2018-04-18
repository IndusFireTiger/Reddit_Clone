<template lang="html">
  <div class="comment">
    <p>By {{user}} {{created}}</p>
    <p>{{content}}</p>    
  </div>
</template>

<script>
export default {
  name: 'comment',
  // props: [
  //   'user',
  //   'created',
  //   'content'
  // ],
  data() {
    return {
      user: 'ramu kaka',
      created: '2 days ago',
      content: 'chai banaoon'
    }
  }
}
</script>

<style scoped lang="css">
  .comment {
    background: #f1c7c7;
    padding: 20px 10px;
    margin-bottom: 20px;
  }
  h4 {
    margin: 5px 0;
  }
  p {
    margin: 5px 0;
  }
</style>