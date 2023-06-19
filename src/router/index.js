// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
    ],
  },

  {
    path: "/log-in",
    component: () => import("@/components/Login.vue"),
  },
  {
    path: "/book-edit/:id",
    component: () => import("@/components/EditBook.vue"),
  },
  {
    path: "/home-page",
    component: () => import("@/components/MainPage.vue"),
  },
  {
    path: "/sign-up",
    component: () => import("@/components/Signup.vue"),
  },
  {
    path: "/add-book",
    component: () => import("@/components/AddBook.vue"),
  },
  {
    path: "/product/:id",
    component: () => import("@/components/BookCard.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
