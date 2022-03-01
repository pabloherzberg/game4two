import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "SignIn",
      component: () => import("../views/SignInPage.vue"),
    },
    {
      path: "/home",
      name: "HomePage",
      component: () => import("../views/HomePage.vue"),
    },
  ],
});

router.beforeEach(async (to) => {
  const user = useAuthStore();
  if (!user.online && to.name !== "SignIn") {
    return { name: "SignIn" };
  }
});

export default router;
