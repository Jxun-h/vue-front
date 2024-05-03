<template>
    <div>
        <span>
            <h1><button @click="login()">Welcome!</button></h1>
        </span>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const login = () => {
    router.push({
        path: "/api/app/login",
    });
};
</script>

<style lang="scss" scoped></style>
