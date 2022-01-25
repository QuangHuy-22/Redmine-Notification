import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import axios from "axios"
import UUID from 'vue-uuid'
import excel from 'vue-excel-export'
import Vuelidate from 'vuelidate'
import VTooltip from 'v-tooltip'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import { BootstrapVueIcons, BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue';
import { VueResponsiveComponents } from "vue-responsive-components"
import { ValidationProvider, ValidationObserver } from "vee-validate";


import "./plugins/vuetify.js"
import "./assets/css/style-custom.css"
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './vue-filter/index.js'
import"./vue-components"

import "@/validators";

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.config.productionTip = false
Vue.use(excel)
Vue.use(VTooltip)
Vue.use(UUID);
Vue.use(VueResponsiveComponents)
Vue.use(Vuelidate)
Vue.use(BootstrapVue);
Vue.component('BIcon', BIcon)
Vue.component('BIconArrowUp', BIconArrowUp)
Vue.component('BIconArrowDown', BIconArrowDown)
Vue.use(BootstrapVueIcons)
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
