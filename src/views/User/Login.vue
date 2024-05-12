<template>
    <div class="login-container">
        <h2>로그인</h2>
        <form @submit.prevent="signIn">
            <div class="form-group">
                <label for="userid">사용자 이름:</label>
                <input type="text" id="userid" v-model="loginData.userid" required />
            </div>
            <div class="form-group">
                <label for="password">비밀번호:</label>
                <input type="password" id="password" v-model="loginData.password" required />
            </div>
            <button type="submit">로그인</button>
        </form>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import * as commonApis from "@/apis/common";
import { useRouter } from "vue-router";

const router = useRouter();

const loginData = ref({
    userid: "",
    password: "",
});

const signIn = () => {
    commonApis
        .postSignIn(loginData.value)
        .then((res) => {
            console.log("로그인 성공.");
            router.push({
                path: "/board",
            });
        })
        .catch((error) => {
            console.log("로그인 실패.");
        });
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
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
    width: 60%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
