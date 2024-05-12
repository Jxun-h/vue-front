import AXIOS from "@/apis";

/**
 * 게시판 목록
 */
export const postBoardList = (data) => {
    return AXIOS.post(`/board/list`, data);
};
