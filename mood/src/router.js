import { createWebHistory, createRouter } from "vue-router";
import Detail from './components/Detail.vue'

const routes = [
  {
    path: "/detail/:id",
    component: Detail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 