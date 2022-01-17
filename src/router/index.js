import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/databases',
    name: 'Databases',
    component: () => import('../views/Databases.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/Events.vue')
  },
  {
    path: '/contactus',
    name: 'Contactus',
    component: () => import('../views/Contactus.vue')
  },
  {
    path: '/publication',
    name: 'Publication',
    component: () => import('../views/Publication.vue')
  },
  {
    path: '/partner',
    name: 'Partner',
    component: () => import('../views/Partner.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('../views/Team.vue')
  },
  {
    path: '/society',
    name: 'Society',
    component: () => import('../views/Society.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
