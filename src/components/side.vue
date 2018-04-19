<template>
  <div id = "side">
    <div>
      <div v-for = 'op in options' :key="op" class='side-sub-div'>{{op}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "side",
  data() {
    return {
      options: ['create', 'trending', 'ads', 'about']
    };
  }
};
</script>

<style>
.side-sub-div {
  height: 300px;
  width: 300px;
  background-color: rgb(247, 251, 252);
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  /* text-align: center;
  padding: 10px;
  background-color: #21503B; */
}
</style>

