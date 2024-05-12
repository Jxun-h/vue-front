import AXIOS from "@/apis";

/**
 * 로그인
 */
export const postSignIn = (data) => {
    return AXIOS.post(`/api/app/users/auth/signIn`, data);
};
