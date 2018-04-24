<template lang="html">
  <div class="comment">   
    <span style="font-size:30px;cursor:pointer" v-on:click="openNav()">&#9776; open</span>
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">&times;</a>
    </div> 
  </div>
</template>

<script>
export default {
  name: "comment",
  data() {
    return {
      user: "",
      created: "",
      content: ""
    };
  },
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "73%";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
  }
};
</script>

<style scoped lang="css">
h4 {
  margin: 5px 0;
}
p {
  margin: 5px 0;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  /* background-color: white; */
  background: linear-gradient(to bottom right, white, rgb(93, 250, 250));
  overflow-x: hidden;
  transition: 0.8s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.5s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>