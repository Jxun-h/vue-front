import { createApp } from "vue";

import "./style.css";
import App from "./App.vue";
import _ from "lodash";
import router from "@/router";
import store from "@/stores";

// Vuetify
import vuetify from "./vuetify";
import "vuetify/styles";

// Infinite Loading
import V3InfiniteLoading from "v3-infinite-loading";
import pinia from "@/stores";

const app = createApp(App);

app.component("V3InfiniteLoading", V3InfiniteLoading);

app.use(router).use(pinia).mount("#app");
