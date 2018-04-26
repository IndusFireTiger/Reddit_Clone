<template lang="html">
  <div id="comment">  
    <!-- <span style="font-size:30px;cursor:pointer">&#9776; open</span> -->
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
      <div class='post-card-container'>
        <div class='post-card'>
          <div class='title-div'>
            <p class= 'title'>{{post.title}}</p>
            <p>Posted by {{post.author}}</p>
          </div>
          <div class='post-card-img'>
            <img v-bind:src="preview" alt="">
          </div>
        </div>
      </div>
      <!-- <hr> -->
      <div id = 'comments-div'>
        <!-- <div class='all-comments'> -->
          <div class='comment' v-for = 'com in comments' v-bind:key = com.id>
            <div>
              <p>{{com.author}}</p>
              <p>{{com.depth}}</p>
            </div>
            <div>
              <p>{{com.body}}</p>
            </div>
            <div v-if="com.replies != undefined">
                <p>has replies</p>
            </div>
            <div v-else>
              <p>no replies</p>
            </div>            
          </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import {bus} from "../main.js";

export default {
  name: "comment",
  data() {
    return {
      post: {},
      preview: null,
      comments: [],
      changed: false
    };
  },
  methods: {
    openNav(post_id) {
      // this.changed = true
      document.getElementById("mySidenav").style.width = "73%";
      this.fetchComments(post_id)
      // this.changed = false
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementsByClassName('post-card').innerHTML = ''

    },
    fetchComments(post_id){
      let com = document.getElementById('comments-div')
      com.innerHTML = ''
      let url = "https://www.reddit.com/"+post_id+".json";
      console.log('fetching comments from', url)
      fetch(url).then(res => res.json()).then(res => { this.populateData(res) });        
    },
    populateData(res){
      this.post = res[0].data.children[0].data
      this.preview = this.post.preview.images[0].source.url 
      console.log('img', this.preview)
      let coms = res[1].data.children
      coms.forEach(com => {
        this.comments.push(com.data)
        // if(com.data.replies) {
          
        // }      
      });    
    }
  },
  created() {
    bus.$on('slideComment', (post_id) => { 
      this.openNav(post_id)
    })
  },
  watch:{
     '$route': function(to, from) {
      this.comments = []
      this.preview = ''
      this.post = {}
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
  /* z-index: 1; */
  top: 90px;
  right: 0;
  /* background-color: white; */
  background: rgb(179, 252, 252);
  overflow-x: scroll;
  transition: 0.8s;
  padding-top: 5px;
}

/* todo */
/* #scroll { 
  direction: ltr;
} */

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
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
#comment {
  margin: 10px;
}
.post-card-container{
  /* height: 200px; */
  margin: 50px 10px 10px 10px ;
  /* border: solid black; */
}
.post-card {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  padding: 10px;
  margin-bottom: 30px;
  background-color: white;
  display: grid;
  grid-template: "title-div post-card-image";
}
.post-card img{
  width: auto;
  height: 300px;
  border-radius: 7%;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
  /* padding: 0; */
  /* margin-top: 20px; */
  /* margin-left: auto;
  margin-right: auto; */
}
.comment {
  background: white;
  margin-bottom: 10px;
  padding: 5px;
  margin: 10px;
}
/* .title {
  float: left;
} */
.post-card-img{
 float: right;
}

.title{
  font-size: 15pt;
}
</style>