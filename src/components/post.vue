<template>
  <div id="posts">
    <div class = post v-for = 'p in posts' v-bind:key = p.id> 
      
      <div class="grid-container">
      <div class="item1"><h3>Title: {{p.title}}</h3></div>
      <div class="up">{{p.ups}}</div>
      <div class="votes">Votes</div>
      <div class="down">{{p.downs}}</div>
      <div class="item2">
        <img v-bind:src="p.thumbnail" alt="">
        </div>
      <div class="item3">Subreddit</div>  
      <div class="item4"><p>Posted by {{p.author}}</p></div>
      <div class="item5">Time</div>
      <div class="item6">Expand</div> 
      <div class="item7">Comment</div> 
      <div class="item8">Share</div>
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
              author: obj.data.author,
              ups: obj.data.ups,
              downs: obj.data.downs,
              thumbnail: obj.data.thumbnail
            };
            this.posts.push(post);
          });
        });
    }
  }
};
</script>

<style>
.post {
  background-color: rgb(216, 236, 175);

  border-color: black;
  border: solid;
  padding: 5px;
  margin: 10px;
}

.item1 { grid-area: title-div; }
.up { grid-area: up; }
.votes { grid-area: vote-div; }
.down { grid-area: down; }
.item2 { grid-area: thumnail; }
.item3 { grid-area: link-div; }
.item4 { grid-area: user; }
.item5 { grid-area: time; }
.item6 { grid-area: expand; }
.item7 { grid-area: comment; }
.item8 { grid-area: share; }

.grid-container {
  display: grid;
  grid-template:
    'up thumnail title-div title-div title-div title-div . . .'
    'vote-div thumnail link-div user time . . . .'
    'down thumnail expand comment share . . . .';
  grid-gap: 1px;
  background-color: #2196F3;
  padding: 10px;
}
.grid-container>div {
  background-color: rgba(255, 255, 255, 0.8);
}
*{
  margin:0;
}
</style>
