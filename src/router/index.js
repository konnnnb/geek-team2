import Vue from 'vue'
import VueRouter from 'vue-router'
import Post from '../views/Post.vue'
import ShowPost from '../views/ShowPost.vue'
import ShowPosts from '../views/ShowPosts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ShowPosts',
    component: ShowPosts
  },
  {
    path: '/showpost/:id',
    name: 'ShowPost',
    component: ShowPost
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
