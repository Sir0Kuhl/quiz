import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import QuizView from "@/views/QuizView";
import AboutView from "@/views/AboutView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/quiz",
    name: "quiz",
    component: QuizView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
