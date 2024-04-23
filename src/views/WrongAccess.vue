<template>
    <main class="container">
        <div class="error-wrap">
            <div class="error-inner">
                <strong>접근권한이 없는 페이지입니다.</strong>
                <span> 페이지가 접근권한이 없거나, 사용할 수 없는 페이지입니다.<br /> </span>
                <button type="button" class="btn-line" @click="goHome">이전으로 돌아가기</button>
            </div>
        </div>
    </main>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = () => {
    router.push("/");
};
</script>

<style lang="scss" scoped></style>
