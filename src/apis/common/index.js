import AXIOS from "@/apis";
import { Axios } from "axios";

/**
 * 게시판 목록
 */
export const postSignIn = (data) => {
    return AXIOS.post(`/api/app/users/auth/signIn`, data);
};
