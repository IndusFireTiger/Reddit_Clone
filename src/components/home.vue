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
  data() {
    return {
      options: ["logo", "reddit-clone", "login", "signup"]
    };
  }
};
</script>

<style>
#homeMenu {
  height: 30px;
  text-align: center;
  padding: 10px;
  background-color: white;
}
.grid-container {
  display: grid;
  grid-template:
    ". . . .";
}
</style>

