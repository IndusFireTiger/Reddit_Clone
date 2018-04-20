<template>
  <div id="navbar">
      <div class="subreddits" v-on:click="subredMenu"> Subreddit
        <!-- <a href="">subreddits</a>    -->
        <!-- <div class="vertical-menu">
          <a v-for="s in subreddits" :key="s" href="">{{s}}</a>
        </div>      -->
      </div>
      <div class="search">
        <input type="text" placeholder="Search">
      </div>    
  </div>
</template>

<script>
export default {
  name: "navbar",
  data(){
      return {
          options: ['mode','subreddits', 'search'],
          subreddits:['Hot','New','Controvercial','Top','Rising']
      }
  },
  methods: {
    subredMenu: function () {
      console.log('clicked')
    }
  }
}
</script>

<style>
#navbar {
  height: 20px;
  text-align: center;
  padding: 10px;
  background-color: #00BCD4
;
}
.subreddits{
  float: left;
}
.subreddits a{
  display: block;
  height: 40px;
  width: 200px;
  font-size: 14px; 
  /* position: absolute; */
}
/* .subreddits:hover{
  background: white;
} */
.search{
  float: right;
  color: white;
}
.search input{
  border:none;
  border-bottom:1px solid #757575;
  cursor: none;
  cursor: pointer;
  padding: 5px 5px 0px 5px;
}
input:focus{
  outline:none; 
}
.vertical-menu {
    width: 100px;
    text-align: left;
    /* display: hidden; */
}

.vertical-menu a {
    background-color: rgb(93, 250, 250);
    color: black;
    display: block;
    padding: 12px;
    text-decoration: none;
}

.vertical-menu a:hover {
    background-color: white;
}
</style>

