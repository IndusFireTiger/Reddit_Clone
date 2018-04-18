<template>
  <div id="posts">
    <div class = post v-for = 'p in posts' v-bind:key = p.id> 
      <div class="grid-container posts">
      <div class="item1"><h3>{{p.title}}</h3></div>
      <div class="vote up"><p>{{p.ups}}</p></div>
      <div class="vote votes"><p>Votes</p></div>
      <div class="vote down"><p>{{p.downs}}</p></div>
      <div class="item2">
        <img v-bind:src="p.thumbnail" alt="">
        </div>
      <div class="item3"><p>{{p.subreddit}}</p></div>  
      <div class="item4"><p>Posted by {{p.author}}</p></div>
      <!-- <div class="item5">Time</div> -->
      <div class="comment item6"><p>Comment</p></div> 
      <div class="share item7"><p>Share</p></div>
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
              thumbnail: obj.data.thumbnail,
              subreddit: obj.data.subreddit_name_prefixed
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
  background-color: #A9D1B7;
  border-color: rgb(212, 210, 210);
  border: solid;
  border-bottom-style: groove;
  /* padding: 5px; */
  /* margin: 10px; */
}

.item1 { grid-area: title-div; }
.up { grid-area: up; }
.votes { grid-area: vote-div; }
.down { grid-area: down; }
.item2 { grid-area: thumnail; }
.item3 { grid-area: link-div; }
.item4 { grid-area: user; }
.item5 { grid-area: time; }
.item6 { grid-area: comment; }
.item7 { grid-area: share; }

.grid-container {
  display: grid;
  grid-template:
    'up title-div title-div title-div title-div title-div title-div title-div thumnail'
    'vote-div link-div link-div user user time . . thumnail'
    'down comment share . . . . . thumnail';
  grid-gap: 1px;
}
.posts>div {
  background-color: rgba(255, 255, 255, 0.8);
  /* margin: 5px; */
}
#posts{
  margin:0;
}
.vote{
  text-align: center
}
</style>
