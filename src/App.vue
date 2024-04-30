<template>
    <layout>
        <router-view></router-view>
    </layout>
</template>
<script setup>
import { computed, onMounted, onUpdated } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import AXIOS from "@/apis/index";
</script>

<style scoped></style>
