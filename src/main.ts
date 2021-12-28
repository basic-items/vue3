import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './registerServiceWorker'
import API from './api'
import route from './router'
import store from './store'

const { routes, beforeEach, afterEach } = route

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to: any, from: any, next: any) => {
  beforeEach(to, from, next)
})

router.afterEach(() => {
  afterEach()
})

createApp(App)
  .use(API)
  .use(router)
  .use(store)
  .mount('#app')
