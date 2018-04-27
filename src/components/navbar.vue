<template>
  <div id="navbar">
      <div class="menu" v-on:click="subredMenu"> Subreddit
          <div class="menu-content">
          <router-link v-for="cat in subreddits" :key="cat" :to="cat.toLowerCase()">{{cat}}</router-link>
          </div>   
      </div>
      <div class="search">
        <input type="text" placeholder="Search" v-model="lookup">
        <button class='btn' v-on:click="search">Look Up</button>
      </div>    
  </div>
</template>

<script>
import {bus} from '../main.js'
export default {
  name: "navbar",
  data(){
      return {
          options: ['mode','subreddits', 'search'],
          subreddits:['Hot','New','Top','Rising', 'Popular'],
          lookup: ''
      }
  },
  methods: {
    subredMenu: function () {
      console.log('clicked')
    }, 
    search: function () {      
      console.log('search', this.lookup)
    }
  },
  watch: {
    '$route': function(to, from) {
      console.log('in navbar.vue watching $route from to ', from.path, to.path)
      let arr = to.path.split('/')
      this.subreddits.forEach((sub) => {
        if(arr[1] === sub.toLowerCase()){
          let path = to.path
          if(arr[1] == 'popular'){
            path = null
          }
          bus.$emit('subreddit', path)
          return
        }
      })
    }
  }
}
</script>

<style>
#navbar {
  height: 49px;
  text-align: center;
  /* padding: 10px; */
  background-color: #00BCD4;
}
.subreddits{
  float: left;
}
.subreddits a{
  display: block;
  height: 40px;
  width: 200px;
  font-size: 14px; 
}
.search{
  float: right;
  color: white;
  padding: 10px;
  margin-right: 6px;
}
.search input{
  font-size: 14px;
  width: 200px;
  border:none;
  border-bottom:1px solid #757575;
  cursor: none;
  cursor: pointer;
  padding: 5px;
}
input:focus{
  outline:none; 
}
.menu {
    text-align: left;
    float: left;
    margin-left:12px;
    padding: 15px;
}
.menu:hover {
  display: block;
  cursor: pointer;
  background: cyan;
}
.menu a {
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
    background-color:  white;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    left: 12px;
    top: 98px;
}

.menu-content a {
    font-size: 15px;
}

.menu-content a:hover {
    background-color: rgb(93, 250, 250);
}

.menu:hover .menu-content {
    display: block;
}

.btn {
  font-size: 14px;
  padding: 3px;
  background-color: rgb(248, 249, 250);
  border: groove; 
  margin-left: 10px;
  width: 90px; 
}
</style>

