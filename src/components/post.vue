<template>
  <div id="posts">
    <div class = post v-for = 'p in posts' v-bind:key = p.id> 
      <div class='flex-container'>
        <div class="left-div">
          <div class="vote">
            <a href="#">up</a>
          </div>
          <div class="vote">
            <p>{{p.ups - p.downs}}</p>
          </div>
          <div class="vote">
            <a href="#">down</a>
          </div>
        </div> 
        <div class="img-div">
          <img v-bind:src="p.thumbnail" alt="">
        </div>
        <div class="right-div">
          <div class="item1">
            <a class="title" :href="p.comment_link">{{p.title}}</a>
            <a :href="p.url">{{p.url.substring(p.url.indexOf('//')+2,40)+"..."}}</a>            
          </div>
          <div class="link">            
              <a :href="p.subreddit">{{p.subreddit}}</a>  
              <span class='by'>Posted by</span> 
              <a :href="p.author">{{p.author}}</a>            
          </div>
          <div class="comment">
            <a :href="p.comment_link">Comment</a>
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
  methods: {
    fetchData: function() {
      let url = "https://www.reddit.com/.json";
      fetch(url)
        .then(res => res.json())
        .then(res => {
          let redditHomeData = res.data.children;
          redditHomeData.forEach(obj => {
            let post = {
              id: obj.data.subreddit_id,
              title: obj.data.title,
              url: obj.data.url,
              author: 'u/'+obj.data.author,
              ups: obj.data.ups,
              downs: obj.data.downs,
              thumbnail: obj.data.thumbnail,
              subreddit: obj.data.subreddit_name_prefixed,
              comment_link: obj.data.permalink
            };
            if(!post.thumbnail.startsWith('http')){
              post.thumbnail = '../assests/img.jpg'
            }
            console.log(post.ups-post.downs)
            // console.log(post.downs)
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
img {
  width: 80px;
  height: 80px;
  border-radius: 30%;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
}
img:hover {
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.4);
}
.flex-container {
  display: flex;
  margin-top: 10px;
  clear: both;
}
.right-div{
  float: right;
  /* background: rgb(170, 239, 248); */
}
.left-div{
  float: left;
  /* background: rgb(170, 239, 248); */
}
p{  
  margin: 0;
  padding:0;
  font-size: 14px;
}
a{
  font-size: 12px; 
  font-weight: normal;
  color: initial;
  text-decoration: none;
}
a:hover{
  color:rgb(0, 119, 255);
}
.by{
  font-size: 12px; 
  padding: 0;
}
.title{
  font-size: 14px;
  /* font-weight: bold; */
}
</style>
