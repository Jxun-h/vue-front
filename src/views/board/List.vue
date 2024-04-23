<template>
    <div>
        <form @submit.prevent="handleFormSubmit">
            <div class="container">
                <br />
                <div class="input-group">
                    <input type="text" v-model="searchVal" class="form-control" placeholder="제목을 입력해주세요." />
                    <button type="submit" class="btn btn-secondary">검색</button>
                </div>
                <br />
                <table class="table table-hover">
                    <colgroup>
                        <col width="2%" />
                        <col width="5%" />
                        <col width="20%" />
                        <col width="5%" />
                        <col width="5%" />
                        <col width="5%" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>
                                <label class="checkbox-inline">
                                    <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" />
                                </label>
                            </th>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>날짜</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in itemList" :key="item.id">
                            <td>
                                <label class="checkbox-inline">
                                    <input type="checkbox" v-model="selectedItems" :value="item.id" />
                                </label>
                            </td>
                            <td>{{ totalCount - pageSize * currentPage - index }}</td>
                            <td>
                                <a :href="'/update/' + item.id">{{ item.title }}</a>
                            </td>
                            <td>{{ item.username }}</td>
                            <td>{{ formatDate(item.regDate) }}</td>
                            <td>{{ item.viewCount }}</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <div class="d-flex justify-content-end">
                    <button @click="deleteItems" class="btn btn-danger">글삭제</button>
                    &nbsp;
                    <router-link to="/write" class="btn btn-primary">글쓰기</router-link>
                </div>
                <br />
                <nav class="container d-flex align-items-center justify-content-center" aria-label="Page navigation example">
                    <ul class="pagination">
                        <li v-if="currentPage > 1" class="page-item">
                            <a @click="changePage(1)" class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;&laquo;</span>
                            </a>
                        </li>
                        <li v-if="currentPage > 1" class="page-item">
                            <a @click="changePage(currentPage - 1)" class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li v-for="pageNumber in pageNumbers" :key="pageNumber" :class="{ active: currentPage === pageNumber }" class="page-item">
                            <a @click="changePage(pageNumber)" class="page-link" href="#">{{ pageNumber }}</a>
                        </li>
                        <li v-if="currentPage < totalPages" class="page-item">
                            <a @click="changePage(currentPage + 1)" class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                        <li v-if="currentPage < totalPages" class="page-item">
                            <a @click="changePage(totalPages)" class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import "@/assets/css/index.scss";
import * as boardApis from "@/apis/common/index";

const boardData = ref([]);

onMounted(() => {
    boardApis.getArticleList({ title: "" }).then((res) => {
        boardData.value = res.data;
    });
});
</script>

<style lang="scss" scoped></style>
