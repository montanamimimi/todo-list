import { createRouter, createWebHistory } from 'vue-router'

import TasksView from '../views/TasksView.vue'

const routes = [
  { path: "/", name: "Tasks", component: TasksView},
  { path: "/about", name: "About", component: () => import(/* webpackChunkname: about */ "../views/AboutView.vue")},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
