import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ProjectsView',
    name: 'ProjectsView', 

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjectsView.vue')
  },
  {
    path: '/About',
    name: 'About',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
{
  path: '/Testimonials',
  name: 'Testimonials',
  component: () => import('../views/Testimonials.vue')
},
{
  path: '/Contact',
  name: 'Contact',

  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
},
{
path: '/Admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
