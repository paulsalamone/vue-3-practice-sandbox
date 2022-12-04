import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import P51View from "../views/P51View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/p5-1",
      name: "p5-1",
      component: P51View,
      path: "/muse1",
      name: "muse1",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Muse1.vue"),
    },
  ],
});

export default router;
