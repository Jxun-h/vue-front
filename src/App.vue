<template>
    <layout :key="`layout-${pageKey}`">
        <router-view></router-view>
    </layout>
    <Popup />
    <Loading />
</template>
<script setup>
import { computed, onMounted, onUpdated } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import AXIOS from "@/apis/index";

const route = useRoute();

// API TOKEN SETTING
onUpdated(() => {
    const token = localStorage.getItem("token");
    AXIOS.defaults.headers["DEMO-AUTH-TOKEN"] = token;
});

onMounted(() => {
    document.addEventListener("click", (e) => {
        const classList = e.target.classList.value.split(" ");
        // if(!classList.includes("_auto-close"))
    });
});
</script>

<style scoped></style>
