import AXIOS from "@/apis";

/**
 * 로그인
 */
export const postSignIn = (data) => {
    return AXIOS.post(`/api/app/users/auth/signIn`, data);
};

export const postSignUp = (data) => {
    return AXIOS.post(`/api/app/users/auth/signUp`, data);
}
