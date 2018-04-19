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
          options: ['mode','subreddits', 'search']
      }
  }
}
</script>

<style>
#navbar {
  height: 20px;
  text-align: center;
  padding: 10px;
  background-color: rgb(219, 255, 255);
}
</style>

