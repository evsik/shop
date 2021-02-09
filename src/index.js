import bootstrap from "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import "./layout/styles/css/style.css";
import "./layout/styles/normalize.css";

import Vue from "vue";
import app from "./views/main.vue";


new Vue({
    render: h => h(app)
}).$mount('#app');