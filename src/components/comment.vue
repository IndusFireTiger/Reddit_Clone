<template lang="html">
  <div class="comment">
    <p>By {{user}} {{created}}</p>
    <p>{{content}}</p>    
  </div>
</template>

<script>
export default {
  name: 'comment',
  data() {
    return {
      user: '',
      created: '',
      content: ''
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