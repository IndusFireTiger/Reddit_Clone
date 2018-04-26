import Vue from 'vue'
import Router from 'vue-router'
import comment from '../components/comment'
import posts from '../components/posts'
// import create from '../components/create'
// import user from '../components/user'

Vue.use(Router)

const routes = [
  { path: '/',
    name: 'home',
    component: posts
  },
  { path: '/:cat_id',
    name: 'home',
    component: posts
  },
  {
    path: '/r/:subred_id',
    name: 'subreddit',
    component: comment
  },
  {
    path: '/u/:user_id',
    name: 'user'
    // component: user
  },
  {
    path: '/r/:subred/comment/:post_id/:post_title',
    name: 'comment',
    component: comment
  },
  {
    path: '/create',
    name: 'create'
    // component: create
  }
]

export default new Router({
  routes,
  mode: 'history'
})
