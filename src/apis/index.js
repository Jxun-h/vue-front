// import router from "@/router";
import axios from "axios";

const AXIOS = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
});

// Request Interceptor
AXIOS.interceptors.request.use(
    (config) => {
        // 요청이 전달되기 전에 작업 수행

        // header에 현재 메뉴ID 전달
        config.headers["MNU_ID"] = router.currentRoute.value.name;

        return config;
    },
    (error) => {
        // 요청 오류가 있는 작업 수행
        const ls = useLoading();
        ls.setLoading(false);
        return Promise.reject(error);
    }
);

// Response Interceptor
AXIOS.interceptors.response.use(
    (response) => {
        // 2XX 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
        // 응답 데이터가 있는 작업 수행
        return response;
    },
    (error) => {
        // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
        // 응답 오류가 있는 작업 수행
        const ls = useLoading();
        ls.setLoading(false);
        const pStore = usePopup();
        if (error.response.status == 401) {
            pStore.tgGdb022m({
                show: true,
                content1: "시스템 사용권한이 없습니다.",
                content2: "관리자에게 문의하십시오.",
                fnConfirm: () => {
                    pStore.$reset();
                    window.location.href = import.meta.env.VITE_LGENSOL_URL;
                },
            });
        } else {
            if (error.response.data.ex_message != null) {
                pStore.tgGdb022m({ show: true, content2: error.response.data.ex_message });
            } else {
                const data = error.response.data;
                pStore.tgGdb022m({ show: true, content1: `code: ${data.code}`, content2: `message : ${data.message}` });
            }
        }
        return Promise.reject(error);
    }
);

export default AXIOS;
