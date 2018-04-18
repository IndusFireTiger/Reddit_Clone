<template>
  <div id="navbar">
    <div class="grid-container navbar">
      <div v-for = 'op in options' :key="op" :class="[op]">{{op}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data(){
      return {
          options: ['mode','subreddits']
      }
  }
}
</script>

<style>
#navbar {
  height: 50px;
  text-align: center;
  padding: 10px;
  background-color: #c6464a;
}
</style>

