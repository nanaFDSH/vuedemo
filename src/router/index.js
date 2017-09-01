import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Index from '@/page/Index'
// import Content from '@/page/Content'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/',
      component: Index
    }
    // {
    //   path:'/Content/:id',
    //   component: Content
    // }
  ]
})
