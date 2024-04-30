import { createRouter, createWebHistory } from "vue-router";

const IndexVue = () => import("@/views/Index.vue");
const LoginVue = () => import("@/views/User/Login.vue");

const routes = [
    { path: "/", name: "Index", component: IndexVue },
    { path: "/login", name: "Login", component: LoginVue },
];

const router = createRouter({
    history: createWebHistory(""),
    routes,
});

export default router;
