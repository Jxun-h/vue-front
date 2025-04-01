<template>
    <div class="login-container">
        <h2 class="title">로그인</h2>
        <form @submit.prevent="signIn">
            <div class="form-group">
                <input type="text" id="userid" v-model="loginData.userid" placeholder="사용자 아이디" required />
            </div>
            <div class="form-group">
                <input type="password" id="password" v-model="loginData.password" placeholder="비밀번호" required />
            </div>
            <button type="submit">로그인</button>
            <button @click="signUp()">회원가입</button>
        </form>
        <auth-modal :show="showModal" :message="modalMessage" @close="closeModal"></auth-modal>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import * as commonApis from "@/apis/common";
import { useRouter } from "vue-router";
import AuthModal from "@/components/AuthModal.vue";

// 로그인 후 라우터를 통해 이동
const router = useRouter();

// 로그인할 때 필요한 데이터
const loginData = ref({
    userid: "",
    password: "",
    email: "",
});

// 로그인 성공/실패 모달에 필요한 Value
const modalMessage = ref("");
const showModal = ref(false);

const signIn = () => {
    commonApis
        .postSignIn(loginData.value)
        .then((res) => {
            modalMessage.value = "반갑습니다! " + res.data.data.userid + "님!";
            showModal.value = true;

            router.push({
                path: "/board",
            });
        })
        .catch((error) => {
            modalMessage.value = "아이디 및 패스워드를 확인해주세요.";
            showModal.value = true;
        });
};

const signUp = () => {
    router.push({
        path: "/api/app/signUp",
    });
};

const closeModal = () => {
    showModal.value = false;
    loginData.value = {
        userid: "",
        password: "",
        email: "",
    };
};
</script>

<style lang="scss" scoped>
.login-container {
    width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.form-group {
    margin-bottom: 30px;
}

label {
    display: block;
    margin-bottom: 10px;
}

input[type="text"],
input[type="password"] {
    width: 60%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px 25px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button + button {
    margin-left: 20px;
    margin-bottom: 15px;
}

button:hover {
    background-color: #0056b3;
}

.title {
    margin-top: 15px;
    margin-bottom: 20px;
}
</style>
