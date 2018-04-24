<template lang="html">
  <div id="comment">  
    <!-- <span style="font-size:30px;cursor:pointer">&#9776; open</span> -->
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
      <div class='post-card'>
        title
      </div>
      <div id = 'comments-div'>
        <!-- <div class='all-comments'> -->
          <div class='comment' v-for = 'p in comments' v-bind:key = p>
            <p>{{p}}</p>
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
      comments: []
    };
  },
  methods: {
    openNav(post_id) {
      document.getElementById("mySidenav").style.width = "73%";
      this.fetchComments(post_id)
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
    slideComment(eve) {
      console.log('slide', eve)
    },
    fetchComments(post_id){
      let com = document.getElementById('comments-div')
      com.innerHTML = ''
      let url = "https://www.reddit.com/"+post_id+".json";
      console.log('fetching comments from', url)
      fetch(url)
        .then(res => res.json())
        .then(res => {          
          let coms = res[1].data.children
          coms.forEach(com => {
            let replies = com.data.body
            // console.log('this',this)
            this.comments.push(replies)         
          });          
            console.log(this.comments.length)
          });
        
    }
  },
  created() {
    bus.$on('slideComment', (post_id) => { 
      console.log('slide:', post_id) 
      this.openNav(post_id)
    })
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
  background: rgb(179, 252, 252);
  overflow-x: scroll;
  transition: 0.8s;
  padding-top: 60px;
}

/* #scroll {
  direction: ltr;
} */


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
#comment {
  margin: 10px;
}
.post-card{
  height: 100px;
  margin: 50px 10px 10px 10px ;
  border: solid black;
}

.comment {
  background: white;
  margin-bottom: 10px;
  padding: 5px;
  margin: 10px;
} 
</style>