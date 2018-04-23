import Vue from 'vue'
import Router from 'vue-router'
import comment from '../components/comment'
import post from '../components/post'
// import create from '../components/create'
// import user from '../components/user'

Vue.use(Router)

const routes = [
  { path: '/:cat_id',
    name: 'home'
    // component: post
  },
  {
    path: '/r/:subred_id',
    name: 'subreddit'
    // component: post
  },
  {
    path: '/u/:user_id',
    name: 'user'
    // component: user
  },
  {
    path: '/r/comment',
    name: 'comment'
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
