import { createRouter, createWebHistory } from "vue-router";

const IndexVue = () => import("@/views/Index.vue");
const LoginVue = () => import("@/views/User/Login.vue");
const BoardListVue = () => import("@/views/Board/BoardList.vue");

const routes = [
    { path: "/", name: "Index", component: IndexVue },
    { path: "/api/app/login", name: "Login", component: LoginVue },
    { path: "/board/list", name: "Board", component: BoardListVue },
];

const router = createRouter({
    history: createWebHistory("/"),
    routes,
});

export default router;
