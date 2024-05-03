<template>
    <router-view></router-view>
</template>
<script setup>
import { computed, onMounted, onUpdated } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import AXIOS from "@/apis/index";

AXIOS.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";
AXIOS.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
</script>

<style scoped></style>
