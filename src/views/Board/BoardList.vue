<template>
    <div>
        <span>
            <h1>작업중입니다.</h1>
            <button @click="postBoardList">게시판 클릭</button>
        </span>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import * as boardApis from "@/apis/board";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const postBoardList = () => {
    boardApis
        .postBoardList()
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        });
};
</script>

<style lang="scss" scoped></style>
