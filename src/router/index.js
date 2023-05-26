// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/book-detail',
    component: () => import('@/components/BookDetail.vue'),
  },
  {
    path: '/log-in',
    component: () => import('@/components/Login.vue'),
  },
  {
    path: '/book-edit',
    component: () => import('@/components/EditBook.vue'),
  },
  {
    path: '/book-detail',
    component: () => import('@/components/BookDetail.vue'),
  },
  {
    path: '/search-book',
    component: () => import('@/components/SearchBook.vue'),
  },
  {
    path: '/home-page',
    component: () => import('@/components/MainPage.vue'),
  },
  {
    path: '/sign-up',
    component: () => import('@/components/Signup.vue'),
  },
  {
    path: '/add-book',
    component: () => import('@/components/AddBook.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
