<template>
  <div id = "homeMenu">
    <p>Home Menu</p>
      <!-- <div v-for="op in data.options" v-bind:options.name>{{op}}</div> -->
  </div>
</template>

<script>
export default {
  name: "homeMenu",
  // prop: [data],
  data() {
    return {
      options: [
        {
          name: "aside"
        },
        {
          name: "logo"
        },
        {
          name: "title"
        },
        {
          name: "popular"
        }
      ]
    };
  }
};
</script>
