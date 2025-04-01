import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const IndexVue = () => import("@/views/Index.vue");
const LoginVue = () => import("@/views/User/Login.vue");
const signUpVue = () => import("@/views/User/SignUp.vue");
const BoardListVue = () => import("@/views/Board/BoardList.vue");

const routes: Array<RouteRecordRaw> = [
    { path: "/", name: "Index", component: IndexVue },
    { path: "/api/app/login", name: "Login", component: LoginVue },
    { path: "/api/app/signUp", name: "signUp", component: signUpVue },
    { path: "/board/list", name: "Board", component: BoardListVue },
];

const router = createRouter({
    history: createWebHistory("/"),
    routes,
});

export default router;
