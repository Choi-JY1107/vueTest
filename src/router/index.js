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
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStringView.vue'
    )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingHtmlView.vue'
    )
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingInputView.vue'
    )
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingSelectView.vue'
    )
  },
  {
    path: '/databinding/check',
    name: 'DataBindingCheckboxView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingCheckboxView.vue'
    )
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadioView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingRadioView.vue'
    )
  },
  {
    path: '/databinding/attr',
    name: 'DataBindingAttributeView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingAttributeView.vue'
    )
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingListView.vue'
    )
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClassView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingClassView.vue'
    )
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyleView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStyleView.vue'
    )
  },
  {
    path: '/event/click',
    name: 'EventClickView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/2_event/EventClickView.vue'
    )
  },
  {
    path: '/event/change',
    name: 'EventChangeView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/2_event/EventChangeView.vue'
    )
  },
  {
    path: '/event/key',
    name: 'EventKeyView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/2_event/EventKeyView.vue'
    )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
