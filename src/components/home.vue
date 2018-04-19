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
      options: ["logo", "readit", "login", "signup"]
    };
  }
};
</script>

<style>
#homeMenu {
  height: 30px;
  text-align: center;
  padding: 10px;
  background-color: rgb(93, 250, 250);
}
.grid-container {
  display: grid;
  grid-template:
    ". . . . . .";
}
</style>

