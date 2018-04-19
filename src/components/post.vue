<template>
  <div id="posts">
    <div class = post v-for = 'p in posts' v-bind:key = p.id> 
      <div class='flex-container'>        
        <div class="left-div">
          <div class="vote">
            <a v-on:click="voteUp()" href="#">up</a>
          </div>
          <div v-if="p.votes > 1000" class="vote">
            <p> {{ Math.floor(p.votes/1000) + 'k+'}}</p>
          </div>
          <div v-else class="vote">
            <p> {{p.votes/1000}}</p>
          </div>
          <div class="vote">
            <a v-on:click="voteDown()" href="#">down</a>
          </div>
        </div>
        <div>
          <img id="thumbnail" v-bind:src="p.thumbnail" alt="">
        </div>
        <div class="right-div">
          <div class="item1">
            <a class="title" :href="p.permalink">{{p.title}}</a>
            <a :href="p.url">{{p.url.substring(p.url.indexOf('//')+2,40)+"..."}}</a>            
          </div>
          <div class="link">            
              <a :href="p.subreddit_name_prefixed">{{p.subreddit_name_prefixed}}</a>  
              <span class='by'>Posted by</span> 
              <a :href="p.author">{{p.author}}</a>            
          </div>
          <div class="comment">
            <a :href="p.permalink">Comment</a>
            </div> 
        </div>        
      </div>
    </div>    
  </div>
</template>

<script>
import comment from "./Comment";

export default {
  name: "post",
  components: { comment },
  data() {
    return {
      posts: []
    };
  },
  created: function() {
    this.fetchData();
  },
  computed: {},
  methods: {
    voteUp: function() {
      console.log("vote up");
    },
    voteDown: function() {
      console.log("vote down");
    },
    fetchData: function() {
      let url = "https://www.reddit.com/.json";
      fetch(url)
        .then(res => res.json())
        .then(res => {
          let redditHomeData = res.data.children;
          redditHomeData.forEach(obj => {
            let post = obj.data            
            if (!post.thumbnail.startsWith("http")) {
              post.thumbnail = "../assests/img.jpg";
            }
            post.author = "u/" + post.author;
            post.votes = post.ups - post.downs;
            this.posts.push(post);
          });
        });
    }
  }
};
</script>

<style>
.post:hover {
  background: linear-gradient(to bottom right, white, rgb(193, 245, 252));
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
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
  border-radius: 30%;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
  padding: 0;
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
  /* background: rgb(170, 239, 248); */
}
p {
  margin: 0;
  padding: 0;
  font-size: 14px;
}
a {
  font-size: 12px;
  font-weight: normal;
  color: initial;
  text-decoration: none;
}
a:hover {
  color: rgb(0, 119, 255);
}
.by {
  font-size: 12px;
  padding: 0;
}
.title {
  font-size: 14px;
  /* font-weight: bold; */
}
</style>
