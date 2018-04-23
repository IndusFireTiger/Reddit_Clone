<template>
  <div id="navbar">
      <div class="menu" v-on:click="subredMenu"> Subreddit
          <div class="menu-content">
          <!-- <a v-for="category in subreddits" :key="category" :href="category.toLowerCase()">{{category}}</a> -->
          <router-link v-for="cat in subreddits" :key="cat" :to="cat">{{cat}}</router-link>
          </div>   
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
      console.log('this.$route',this.$route)
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
  /* position: relative; */
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
.menu {
    width: 100px;
    text-align: left;
    /* display: none; */
    float: left;
}
.menu:hover {
  display: block;
  cursor: pointer;
}
.menu a {
  background-color: rgb(93, 250, 250);
  color: black;
  display: block;
  padding: 12px;
  text-decoration: none;  
}

.menu a:hover {
  background-color: white;
  cursor: pointer;
}

.menu-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.menu-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
}

.menu-content a:hover {
    background-color: #ddd;
}

.menu:hover .menu-content {
    display: block;
}
</style>

