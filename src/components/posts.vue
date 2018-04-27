<template>
  <div id="posts">    
    <div class=container>
      <post id=post-div></post>
      <side id=side-div></side> 
      </div>
  </div>
</template>

<script>
// import comment from "./Comment";
import side from "./side";
import comment from "./comment";
import post from "./post";

export default {
  name: "posts",
  components: { comment, side, post },
  data() {
    return {
      posts: [],
      onscroll: function(ev) {
        console.log('scrolling')
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          console.log("EOP reached");
        }
      }
    };
  },
  created: function() {
    this.fetchData();
    window.onscroll = this.onscroll;
    console.log("window updated");
  },
  methods: {
    shortenVotes: function(v) {
      return Math.floor(v / 1000) + "k+";
    },
    shortenURL: function(link) {
      return link.substring(link.indexOf("//") + 2, 40) + "...";
    },
    voteUp: function() {
      console.log("vote up");
    },
    voteDown: function() {
      console.log("vote down");
    },
    appendItems: function() {
      //load more items
      console.log("appending items");
    },
    fetchData: function() {
      let url = "https://www.reddit.com/.json";
      fetch(url)
        .then(res => res.json())
        .then(res => {
          let after = res.data.after;
          let redditHomeData = res.data.children;
          redditHomeData.forEach(obj => {
            let post = obj.data;
            // if (!post.thumbnail.startsWith("http")) {
            //   post.thumbnail = "../assests/img.jpg";
            // }
            post.author = "u/" + post.author;
            post.votes = post.ups - post.downs;
            post.permalink = "https://www.reddit.com" + post.permalink;
            this.posts.push(post);
          });
          console.log("after:", after);
        });
    }
  },
  watch: {
    eop: function(v) {
      console.log("eop changed:", this.eop);
      this.eop = false;
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
  border-radius: 7%;
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
}
p {
  margin: 0;
  padding: 0;
  font-size: 14px;
}
a {
  font-size: 12px;
  font-weight: normal;
  /* color: initial; */
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
  color:initial;
}

.container {
  display: grid;
  grid-template: "post-div side-div";
  padding: 5px;
}
</style>
