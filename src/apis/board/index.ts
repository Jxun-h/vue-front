import AXIOS from "../index";

interface BoardListRequest {
    page?: number;
    size?: number;
    keyword?: string;
}

interface CommonResponse<T> {
    data: T;
    success: boolean;
    message: string;
}

/**
 * 게시판 목록
 */
export const postBoardList = (data: BoardListRequest = {}) => {
    return AXIOS.post<CommonResponse<any>>(`/board/list`, data);
};
