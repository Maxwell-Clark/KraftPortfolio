import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from '../components/Blog.vue'
import Home from '../components/Home.vue'
import About from '../views/About.vue'
import Resume from '../views/Resume.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/aboutme',
    name: 'About Me',
    component: About
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  }
]

const router = new VueRouter({
  routes
})

export default router
