<template>
  <div id = "homeMenu">
    <div class="grid-container home-menu">
      <div v-for = 'op in options' :key="op" :class="[op]">{{op}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeMenu",
  // prop: [data],
  data() {
    return {
      options: ["logo", "readit", "popular", "search", "login", "signup"]
    };
  }
};
</script>

<style>
#homeMenu {
  height: 50px;
  text-align: center;
  padding: 10px;
  background-color: #21503B;
}
</style>

