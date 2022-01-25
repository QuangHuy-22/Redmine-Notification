import Vue from 'vue'
import Vuex from 'vuex'
// import user from "./ModelUser"
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        username: '',
        base_url: process.env.VUE_APP_BASE_URL_USER,
        base_url_risk: process.env.VUE_APP_BASE_URL_RISK,
        base_url_notify: process.env.VUE_APP_BASE_URL_NOTIFY,
        base_token_risk: process.env.VUE_APP_TOKEN_RISK,
        base_token_notify: process.env.VUE_APP_TOKEN_NOTIFY,
        port: process.env.VUE_APP_PORT,
        email: "",
        count : 1

    },
    getters: {
        USERNAME: state => {
            return state.username;
        },
        BASE_URL: state => {
            return state.base_url
        },
        BASE_URL_RISK: state => {
            return state.base_url_risk
        },
        BASE_URL_NOTIFY: state => {
            return state.base_url_notify
        },
        BASE_TOKEN_RISK: state => {
            return state.base_token_risk
        },
        BASE_TOKEN_NOTIFY: state => {
            return state.base_token_notify
        },
        PORT: state => {
            return state.port
        },
        FORGET_USERNAME: state => {
            return state.username
        },
    },
    mutations: {
        SET_USERNAME: (state, payload) => {
            state.username = payload;
        },
        SET_BASE_URL: (state, payload) => {
            state.base_url = payload
        },
        SET_BASE_URL_RISK: (state, payload) => {
            state.base_url_risk = payload
        },
        SET_BASE_URL_NOTIFY: (state, payload) => {
            state.base_url_notify = payload
        },
        SET_BASE_TOKEN_RISK: (state, payload) => {
            state.base_token_risk = payload
        },
        SET_BASE_TOKEN_NOTIFY: (state, payload) => {
            state.base_token_notify = payload
        },
        SET_PORT: (state, payload) => {
            state.port = payload
        },
        FORGET_USERNAME: (state, payload) => {
            state.username = payload
        },
    },
    actions: {},
    // modules:{
    //     user
    // }
});
export default store