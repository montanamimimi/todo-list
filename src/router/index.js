import { createRouter, createWebHistory } from 'vue-router'

import TasksView from '../views/TasksView.vue'

const routes = [
  { path: "/", name: "Tasks", component: TasksView},
  { path: "/category", name: "Categories", component: () => import(/* webpackChunkname: categoryList */ "@/views/CategoryListView.vue")},
  { path: "/about", name: "About", component: () => import(/* webpackChunkname: about */ "@/views/AboutView.vue")},
  { 
    path: "/category/:id", 
    name: "Category", 
    props: true,
    component: () => import(/* webpackChunkname: editCategory */ "@/views/CategoryItemView.vue")
  },
  { 
    path: "/:pathMatch(.*)*", 
    name: "NotFound", 
    component: () => import(/* webpackChunkname: editCategory */ "@/components/PageNotFound.vue")
  },
    
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
