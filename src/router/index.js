import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
// name은 다 달라야 함
  {
    // app.js로 vue로 개발된 화면이 처음 받아오는 파일은 밑 방식
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // 사이즈가 작거나, 사용자 빈도수가 낮은 애들은 웹팩없이
    // 사이즈가 크거나, 사용자 빈도수가 높은 애들은 웹팩있게
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about", webpackPrefetch:true */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
