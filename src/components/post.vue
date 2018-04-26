<template>
  <div id="post">
    <comment></comment>
    <div>
      <div class=post v-for='(p, i) in posts' v-bind:key='p.votes' v-on:click='postSelected' :id='i'>  
        <!-- <hr> -->
          <div class='flex-container'>        
            <div class="left-div">
              <div class="vote">
                <!-- <p v-on:voteAdded="voteDown()">hey</p> -->
                <a v-on:click="voteUp()" href="#">+</a>
              </div>
              <div v-if="p.votes > 1000" class="vote">
                <p> {{shortenVotes(p.votes)}}</p>
              </div>
              <div v-else class="vote">
                <p> {{p.votes}}</p>
              </div>
              <div class="vote">
                <a v-on:click="voteDown()" href="#">-</a>
              </div>
            </div>
            <div>
              <img id="thumbnail" v-bind:src="p.thumbnail" alt="" v-on:click='postSelected'>
            </div>
            <div class="right-div">
              <div>
                <router-link class="title" :to="p.permalink">{{p.title}}</router-link>
                <a :href="p.url">{{shortenURL(p.url)}}</a>            
              </div>
              <div class="link">            
                  <a :href="p.subreddit_name_prefixed">{{p.subreddit_name_prefixed}}</a>  
                  <span class='by'>Posted by</span> 
                  <a :href="p.author">{{p.author}}</a>            
              </div>
              <div class="comment">
                  <router-link :to="p.permalink">Comment</router-link>
                </div> 
            </div>        
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import comment from "./comment";
import {bus} from "../main.js"
console.log('bus in post', bus)
export default {
  name: "post",
  components: { comment },
  data() {
    return {
      posts: [],
      eop: 0,
      onscroll: function(ev) {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          this.eop = 1;
          console.log("EOP reached", this.eop);
        }
      }
    };
  },
  created: function() {
    this.fetchData();
    window.onscroll = this.onscroll;
    console.log("window updated");
    bus.$on('subreddit', (to) =>{
      console.log('subreddit category selected', to)
      this.posts = []
      this.fetchData(to)
    })
  },
  methods: {
    postSelected: function(e){
      console.log('postSelected', e.path[0].src)
      bus.$emit('focused',  e.path[0].src)
    },
    shortenVotes: function(v) {
      return Math.floor(v / 1000) + "k+";
    },
    shortenURL: function(link) {
      return link.substring(link.indexOf("//") + 2, 40) + "...";
    },
    voteUp: function() {
      console.log("vote up");
      // this.$emit('voteAdded')
    },
    voteDown: function() {
      console.log("vote down");
    },
    appendItems: function() {
      //load more items
      console.log("appending items");
    },
    fetchData: function(url) {
      url = url? 'https://www.reddit.com'+url+'/.json' : "https://www.reddit.com/.json"
      console.log('url',url)
      // url = url || "https://www.reddit.com/.json";
      fetch(url)
        .then(res => res.json())
        .then(res => {
          let after = res.data.after;
          let redditHomeData = res.data.children;
          redditHomeData.forEach(obj => {
            let post = obj.data;
            if (!post.thumbnail.startsWith("http")) {
              post.thumbnail = "../assests/img.jpg";
            }
            post.author = "u/" + post.author;
            post.votes = post.ups - post.downs;
            console.log('subreddit',post.subreddit_id)
            // post.permalink = "https://www.reddit.com" + post.permalink;
            this.posts.push(post);
          });
            console.log(this.posts)
          // console.log("after:", after);
        });
    }
    // commentClicked: function() {
    //   console.log("comment clicked")
    // }
  },
  watch: {
    eop: function(v) {
      console.log("eop changed:", this.eop);
      this.eop = false;
    },
    '$route': function(to, from) {
      let arr = to.path.split('/')
      if(arr[3]=='comments'){
        console.log('open comment slide')
        bus.$emit('slideComment', to.path)
      }
    }
  
  }
};
</script>

<style>
.post:hover {
  background: linear-gradient(to bottom right, white, rgb(193, 245, 252));
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.post * {
  margin: 0;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 3px;
}
.vote {
  text-align: center;
}
#thumbnail {
  width: 80px;
  height: 80px;
  border-radius: 7%;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
  padding: 0;
  margin-right: 5px;
}
#thumbnail:hover {
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.3);
}
.flex-container {
  display: flex;
  margin-top: 10px;
  clear: both;
}
.right-div {
  float: right;
}
.left-div {
  float: left;
  min-width: 50px;
}
p {
  margin: 0;
  padding: 0;
  font-size: 14px;
}
a {
  font-size: 11px;
  font-weight: normal;
  color: rgb(43, 114, 247);
  text-decoration: none;
}
a:hover {
  color: rgb(0, 119, 255);
}
.by {
  font-size: 11px;
  padding: 0;
}
.title {
  font-size: 14px;
}

.container {
  display: grid;
  grid-template: "post-div side-div";
  padding: 5px;
}
.vote a{
  font-size: 15pt;
}
.vote a:hover{  
  font-weight: bolder;
}
.right-div a{
  padding: 0;
  /* margin: 5px; */
}
</style>
