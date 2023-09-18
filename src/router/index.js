import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Templatesyntax',
      name: 'Templatesyntax',
      component: () => import('../views/TemplateSyntaxView.vue')
    },
    {
      path: '/Method',
      name: 'Method',
      component: () => import('../views/Method.vue')
    },
    {
      path: '/Computed',
      name: 'Computed',
      component: () => import('../views/Compute.vue')
    },
    {
      path: '/Classbinding',
      name: 'Classbinding'
      ,component: () => import('../views/ClassStyleBinding.vue')
    },
    {
      path: '/Event'
      ,name: 'Event'
      ,component: () => import('../views/Eventhandle.vue')
    },
    {
      path: '/FormBinding'
      ,name: 'FormBinding'
      ,component: () => import('../views/Formbind.vue')
    },
    {
      path: '/Watcher',
      name: 'Watcher',
      component: () => import('../views/Watcher.vue')
    },
    {
      path: '/Component'
      ,name: 'Component'
      ,component: () => import('../views/Components.vue')
    },
    {
      path: '/List'
      ,name: 'List'
      ,component: () => import('../views/Listrendering.vue')
    },
    {
      path: '/Reactivity',
      name: 'Reactivity',
      component: () => import('../views/Reactivityfundamental.vue')
    },
    {
      path: '/router'
      ,name: 'router'
      ,component: () => import('../views/Router.vue')
    },
  ]
})

export default router
