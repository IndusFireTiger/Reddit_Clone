<template>
  <div id = "side">
    <div>
      <div v-for = 'op in options' :key="op" class='side-sub-div'></div>
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
  background: linear-gradient(to bottom right, white,rgb(93, 250, 250));
  margin: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  padding: 10px;
}
</style>

