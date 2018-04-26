<template>
  <div id = "side">
    <div>
      <focus class='side-sub-div'>card focused post</focus>
      <div class='side-sub-div'>create post</div>
      <div class='side-sub-div'>trending</div>
      <div class='side-sub-div'>about</div>
    </div>
  </div>
</template>

<script>
import focus from './focusedCard'

export default {
  name: "side",
  components: {focus},
  data() {
    return {
      options: ['card focused post', 'create post', 'trending r/', 'about']
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

