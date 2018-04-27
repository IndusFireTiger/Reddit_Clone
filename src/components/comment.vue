<template lang="html">
  <div id="comment">
    <div id="mySidenav" class="sidenav">
      <a class="closebtn" @click="closeNav()">&times;</a>
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
      <div id = 'comments-div'>
          <div class='comment' v-for = '(com, i) in comments' v-bind:key= com.id :id='i'>
            <div>
              <p>{{com.author}}</p>
            </div>
            <div>
              <p>{{com.body}}</p>
            </div>
            <div v-if="com.replies != undefined">
                <button @click='showReplies(com, i)'>Show Replies</button>
            </div>
            <div v-else>
              <p>no replies</p>
            </div>            
          </div>
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
    showReplies(post, i) {
      console.log('showing replies', i, post)
    },
    openNav(post_id) {
      document.getElementById("mySidenav").style.width = "73%";
      this.fetchComments(post_id)
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
  top: 100px;
  right: 0;
  background: rgb(179, 252, 252);
  overflow-x: scroll;
  transition: 0.8s;
  padding-top: 5px;
}

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
  margin: 50px 10px 10px 10px ;
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
  float: right;
  width: auto;
  height: 300px;
  border-radius: 7%;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
}
.comment {
  background: white;
  margin-bottom: 10px;
  padding: 5px;
  margin: 10px;
}
.post-card-img{
 float: right;
}

.title{
  font-size: 15pt;
  margin-right: 5px;
}
</style>