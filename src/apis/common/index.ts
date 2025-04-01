import AXIOS from "../index";

interface CommonResponse<T> {
    data: T;
    success: boolean;
    message: string;
}

interface UserData {
    email: string;
    password: string;
    userid?: string; // Login.vue에서 사용
}

/**
 * 로그인
 */
export const postSignIn = (data: UserData) => {
    return AXIOS.post<CommonResponse<any>>(`/api/app/users/auth/signIn`, data);
};

export const postSignUp = (data: UserData) => {
    return AXIOS.post<CommonResponse<any>>(`/api/app/users/auth/signUp`, data);
};

export const getCommonApi = <T>(url: string) => {
    return AXIOS.get<CommonResponse<T>>(url);
};

export default { postSignIn, postSignUp, getCommonApi };
