import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BlogView from "../views/BlogView.vue";
import CreateView from "../views/CreateView.vue";
import ErrorView from "../views/ErrorView.vue";

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
      component: AboutView,
    },
    {
      path: "/blog/:id",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/create",
      name: "create",
      component: CreateView,
    },
    {
      path: "/:catchAll(.*)",
      name: "error",
      component: ErrorView,
    },
  ],
});

export default router;
