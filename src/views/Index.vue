<template>
    <div>
        <span>LOADING...</span>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import AXIOS from "@/apis";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

onMounted(() => {});
</script>

<style lang="scss" scoped></style>
