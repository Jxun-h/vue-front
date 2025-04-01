<template>
    <router-view></router-view>
</template>
<script setup lang="ts">
import { computed, onMounted, onUpdated } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import AXIOS from "@/apis";
</script>

<style scoped></style>
