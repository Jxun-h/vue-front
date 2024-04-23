import AXIOS from "@/apis";
import { Axios } from "axios";

/**
 * 게시판 목록
 */
export const getArticleList = (data) => {
    return AXIOS.get(`/board/list`, { params: data }, { headers: { "Content-Type": "application/json" } });
};
