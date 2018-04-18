<template>
  <div id="posts">
    <!-- <div class='post'>
      Post by {{by}} {{at}} 
      <div>
        {{ content }}
      </div>
      <comment></comment> -->
    <!-- </div>  -->
    <div class = post v-for = 'p in stories' v-bind:key = p.id> 
      <p>Votes: {{p.ups - p.downs}}</p>
      <p>By: {{p.author}}</p>
      <p>Title: {{p.title}}</p>
      <img v-bind:src="p.thumbnail" alt="">
    </div>
  </div>
</template>

<script>
import comment from "./Comment";

export default {
  name: 'post',
  components: {comment},
  data() {
    return {
      content: "hey there",
      by: "Sindhu",
      at: "3 days ago",
      // comment: "commenta"
      stories: []
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      let url = 'https://www.reddit.com/.json'
      fetch(url).then(res => res.json()).then(res => {
        let redditHomeData = res.data.children
        redditHomeData.forEach(obj => {   
          let post = {
            id: obj.data.subreddit_id,
            title: obj.data.title,
            url: obj.data.url,
            author: obj.data.author,
            ups: obj.data.ups,
            downs: obj.data.downs,
            thumbnail:obj.data.thumbnail,
          }
          this.stories.push(post)
        });
      })
    }
  }
};
</script>

<style>
.post{
  background-color: rgb(216, 236, 175); 

  border-color: black;
  border: solid;
  padding: 5px;
  margin: 10px;
}
</style>
