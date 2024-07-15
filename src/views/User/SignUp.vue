<template>
    <div class="signup-container">
        <h2 class="title">회원가입</h2>
        <form @submit.prevent="signUp">
            <div class="form-group">
                <label for="userid">ID:</label>
                <input type="text" id="userid" v-model="signUpData.userid" required />
            </div>
            <div class="form-group">
                <label for="password">비밀번호:</label>
                <input type="password" id="password" v-model="signUpData.password" required />
            </div>
            <div class="form-group">
                <label for="usernick">닉네임:</label>
                <input type="text" id="usernick" v-model="signUpData.usernick" required />
            </div>
            <div class="form-group">
                <label for="email">이메일:</label>
                <input type="email" id="email" v-model="signUpData.email" required />
            </div>
            <div class="form-group">
                <label for="username">사용자 이름:</label>
                <input type="text" id="username" v-model="signUpData.username" required />
            </div>
            <div class="form-group">
                <label for="birth">생일:</label>
                <input type="date" id="birth" v-model="signUpData.birth" required />
            </div>
            <div class="form-group">
                <label for="phone">전화번호:</label>
                <input type="text" id="phone" v-model="signUpData.phone" />
            </div>
            <button type="submit">회원가입</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import * as commonApis from "@/apis/common";
import { useRouter } from "vue-router";

const router = useRouter();

const signUpData = ref({
    userid: "",
    password: "",
    usernick: "",
    email: "",
    username: "",
    birth: "",
    phone: "",
});

const signUp = () => {
    commonApis
        .postSignUp(signUpData.value)
        .then((res) => {
            console.log("회원가입 성공.");
            // TODO : 회원가입 완료 모달창 생성
            router.push({
                path: "/api/app/login",
            });
        })
        .catch((error) => {
            console.log("회원가입 실패.");
        });
};
</script>

<style lang="scss" scoped>
.signup-container {
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
input[type="password"],
input[type="email"],
input[type="date"] {
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

button:hover {
    background-color: #0056b3;
}

.title {
    margin-top: 15px;
    margin-bottom: 20px;
}
</style>
