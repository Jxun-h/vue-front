import { createRouter, createWebHistory } from "vue-router";
import AXIOS from "@/apis";

const IndexVue = () => import("@/views/Index.vue");
const BoardList = () => import("@/views/board/List.vue");
const NotFound = () => import("@/views/NotFound.vue");
const WrongAccess = () => import("@/views/WrongAccess.vue");

const routes = [
    { path: "/", name: "Index", component: IndexVue },
    { path: "/board/list", name: "BoardList", component: BoardList },
    { path: "/notfound", name: "NotFound", component: NotFound },
    { path: "/wrongaccess", name: "WrongAccess", component: WrongAccess },
    { path: "/:pathMatch(.*)*", redirect: { name: "NotFound" } },
];

const router = createRouter({
    history: createWebHistory("/"),
    routes,
});

export default router;
