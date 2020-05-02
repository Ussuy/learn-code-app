import VueRouter from 'vue-router'
import Index from './app/not-logged/Index.vue'
import Explore from './app/logged/explore/Explore.vue'
import MyCourses from './app/logged/my-courses/MyCourses.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/explore',
      component: Explore
    },
    {
      path: '/courses',
      component: MyCourses
    },
  ]
})

export default router