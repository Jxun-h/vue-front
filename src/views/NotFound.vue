<template>
    <main class="container">
        <div class="error-wrap">
            <div class="error-inner">
                <strong>페이지를 찾을 수 없습니다.</strong>
                <span>
                    페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.<br />
                    입력하신 주소가 정확한지 다시 한번 확인해주세요.
                </span>
                <button type="button" class="btn-line" @click="goHome">이전으로 돌아가기</button>
            </div>
        </div>
    </main>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = () => {
    router.back();
};
</script>

<style lang="scss" scoped></style>
