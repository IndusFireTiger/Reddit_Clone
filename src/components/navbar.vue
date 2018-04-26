<template>
  <div id="navbar">
    <!-- <ul>
      <li> -->
      <div class="menu" v-on:click="subredMenu"> Subreddit
          <div class="menu-content">
          <!-- <a v-for="category in subreddits" :key="category" :href="category.toLowerCase()">{{category}}</a> -->
          <router-link v-for="cat in subreddits" :key="cat" :to="cat.toLowerCase()">{{cat}}</router-link>
          </div>   
      </div>
      <!-- </li>
    </ul> -->
      <div class="search">
        <input type="text" placeholder="Search">
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
          subreddits:['Hot','New','Top','Rising', 'Popular']
      }
  },
  methods: {
    subredMenu: function () {
      console.log('clicked')
      // document.getElementsByClassName('menu-content')[0].style.display = 'none'
      // console.log(document.getElementsByClassName('menu-content')[0].style.display)
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
          console.log('sub', sub)
          bus.$emit('subreddit', path)
          return
        }
      })
      // if(arr[1] === 'hot')
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
  background: yellow;
}
.menu a {
  /* background-color: rgb(93, 250, 250); */
  color: black;
  display: block;
  padding: 12px;
  text-decoration: none;  
}

.menu a:hover {
  background-color: white;
  cursor: pointer;
}
.hidden {  
}
.menu-content {
    display: none;
    position: absolute;
    /* background-color:  rgb(93, 250, 250); */
    background-color:  white;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 5;
}

.menu-content a {
    /* float: none;
    text-align: left; */
    font-size: 15px;
}

.menu-content a:hover {
    /* color: initial; */
    /* background-color: white(191, 243, 250); */
    background-color: rgb(93, 250, 250);
}

.menu:hover .menu-content {
    display: block;
}
</style>

