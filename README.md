# Vue 3 + Vite + TypeScript 블로그 프로젝트

Vue 3와 TypeScript를 사용한 블로그/게시판 프로젝트입니다.

## 기술 스택

-   Vue 3 (Composition API와 `<script setup>` 사용)
-   TypeScript
-   Vite
-   Vuetify 3
-   Vue Router
-   Pinia (상태 관리)
-   Axios (HTTP 클라이언트)
-   i18n (다국어 지원)

## 프로젝트 설치

```bash
# 의존성 설치
npm install
```

## 개발 서버 실행

```bash
# 개발 서버 실행 (http://localhost:8080/)
npm run dev
```

## 배포용 빌드

```bash
# 프로덕션 빌드
npm run build
```

## 타입 체크

```bash
# TypeScript 타입 체크 실행
npm run type-check
```

## 폴더 구조

-   `/src/apis`: API 통신 관련 파일
-   `/src/assets`: 정적 리소스 (이미지, 스타일 등)
-   `/src/components`: 재사용 가능한 컴포넌트
-   `/src/router`: Vue Router 설정
-   `/src/stores`: Pinia 스토어
-   `/src/views`: 페이지 컴포넌트
-   `/src/env.d.ts`: 환경 변수 타입 정의
-   `/src/shims-vue.d.ts`: Vue 컴포넌트 타입 정의

## IDE 추천 설정

-   [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (이전의 Volar) - Vetur 비활성화 필요
