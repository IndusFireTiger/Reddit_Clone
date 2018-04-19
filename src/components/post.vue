<template>
  <div id="posts">
    <div class = post v-for = 'p in posts' v-bind:key = p.id> 
      <div class="grid-container posts">
        <div class="item1"><h4>{{p.title}}</h4></div>
        <div class="vote up"><p>{{p.ups}}</p></div>
        <div class="vote votes"><p>Votes</p></div>
        <div class="vote down"><p>{{p.downs}}</p></div>
        <div class="item2"><img v-bind:src="p.thumbnail" alt=""></div>
        <div class="link"><p>{{p.subreddit}}  Posted by {{p.author}}</p></div>
        <!-- <div class="item5">Time</div> -->
        <div class="comment"><p>Comment Share</p></div>  
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
  background-color: rgb(247, 251, 252);
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
}

.item1 {
  grid-area: title-div;
}
.up {
  grid-area: up;
}
.votes {
  grid-area: vote-div;
}
.down {
  grid-area: down;
}
.item2 {
  grid-area: thumbnail;  
  /* grid-auto-columns: min-content; */
  max-width: 100px;
  max-height: 100px;
}
.link {
  grid-area: link;
}
.item4 {
  grid-area: user;
}
.item5 {
  grid-area: time;
}
.comment {
  grid-area: comment;
}
.item7 {
  grid-area: share;
}

.grid-container {
  display: grid;
  grid-template:
    "thumbnail title-div title-div title-div . up"
    "thumbnail link . . . vote-div"
    "thumbnail comment . . . down";
  /* grid-gap: 1px; */
  
  /* grid-template-columns: 100px auto auto auto auto 100px;
  grid-template-rows: 100px auto auto; */
}
.posts * {
  margin: 0;
  padding-left: 5px;
  padding-top: 5px;
}
.vote {
  text-align: center;
}
img {
  width: 80px;
  height: 80px;
  border-radius: 2px;
}
/* h4{
  margin:0;
  padding-left: 5px
} */
</style>
