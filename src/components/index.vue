<template class="container">
<div class="home pages">
    
    <b-navbar class="header" fixed="top">
<header id="page-topbar">
<div class="navbar-header">
<div class="d-flex">
    <!-- LOGO -->
    <div class="navbar-brand-box">

        <div class="logo logo-light">
            <span class="logo-sm" v-show="logo">
                <img src="../assets/images/favicon.svg" alt="" height="50" >
            </span>
            <span class="logo-lg" v-show="logoRisk">
                <img src="../assets/images/risk-white.svg" alt="" height="50" width="130">
            </span>
        </div>
    </div>
<!-- show-sidebar -->
<div >
    <!-- show-sidebar -->
    <div class="listChange">
<b-button  @click="clickSidebar" v-b-toggle.sidebar-border variant="none"><b-icon icon="list" class="" style="color: white; font-size: 25px;" ></b-icon></b-button>
    </div>
    <!-- show-sidebar -->
<b-sidebar class="side" id="sidebar-border" sidebar-class="border-right border-none">
    <router-link to="/home-page">
        <div class="content-menu" >
            <span class="logo-sm">
                <img src="../assets/images/risk-white.svg" alt="" height="50">
            </span>
        </div>
        </router-link>
    <router-link to="/list-risk" style="color: #474D52;">
    <div class="content-sidebar"  :class=" this.DATA_PERMISSION.includes('VIEW_LIST_TRANS') ? '' : 'd-none'">
        <b-icon icon="graph-up" style="padding-right: 25px; color: #474D52;"></b-icon>
        <span class="name-router" key="t-calendar">Quản lý giao dịch</span>
    </div>
    </router-link>
            <div class="content-sidebar" :class=" this.DATA_PERMISSION.includes('VIEW_LIST_USER') ? '' : 'd-none'" >
                <router-link to='/list-user' style="color: #474D52;">
                <b-icon icon="person-circle" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span class="name-router" key="t-utility">Quản lý User</span>
                </router-link>
            </div>
            <div class="content-sidebar" :class=" this.DATA_PERMISSION.includes('VIEW_LIST_ROLE') ? '' : 'd-none'">
                <router-link to='/list-role' style="color: #474D52;">
                <b-icon icon="diagram3" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span class="name-router" key="t-utility">Quản lý nhóm quyền</span>
                </router-link>
            </div>
</b-sidebar>
        <!-- end show-sidebar -->
</div>
<!-- show-sidebar -->
    <!-- App Search-->
</div>
<div class="d-flex">
    <div class="dropdown d-inline-block d-lg-none ml-2">
        <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <b-icon icon="search" ></b-icon>
        </button>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
            aria-labelledby="page-header-search-dropdown">
            <form class="p-3">
                <div class="form-group m-0">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username">
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="submit"><b-icon icon="search" ></b-icon></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="dropdown d-inline-block">
        <button @click="$bvToast.show('example-toast')" type="button" class="btn header-item noti-icon waves-effect" style="padding-top: 20px; color: white;" id="page-header-notifications-dropdown"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="badge badge-danger badge-pill" style="position: absolute; top: 12px; right: 4px;">{{ numNotify }}</span>
            <b-icon icon="bell" ></b-icon>
        </button>
        <b-toast id="example-toast" class="list-notify" style="position: absolute;"   static no-auto-hide>
            <template #toast-title >
            <span style="margin-right: 22px;">Thông báo</span>
            <b-form-checkbox style="margin-right: 15px;" v-model="checkNotify" switch  @change="notify">Bật thông báo</b-form-checkbox>
            <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown "
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color: #fff;padding:0px">
            <b-dropdown right text="" variant="none" no-caret>
                <template #button-content>
            <b-icon icon="three-dots"></b-icon>
            <!-- <b-icon icon="chevron-down" class="buttonDrops" ></b-icon> -->
                </template>
            <b-dropdown-item >
                </b-dropdown-item>
            <b-dropdown-item>
            <div @click="checkReadAllNotify" class="icon-check-notify">
            <b-icon icon="check2-circle" id="button-1" style="margin-right:5px;"   ></b-icon>
            <span style="color: #6c757d;">Đọc tất cả</span>
            </div>
            </b-dropdown-item>
            <b-dropdown-item>
                <b-icon icon="window" style="margin-right:3px;"></b-icon>
                <span style="color: #6c757d;">Trang thông báo</span>
            </b-dropdown-item>
            </b-dropdown>
        </button>
            </template>
            <b-tooltip target="button-1" title="Đọc tất cả!"></b-tooltip>
        <div class="notify" style="border-bottom: 1px solid #A9A9A9; font-size: 12px" v-for="dataNotify in dataNotification" :key="dataNotify">
        <div :class="dataNotify.readStatus == 'NOT_READ' ? 'text-white bg-secondary rounded' : '' " id="title-notify">
        <span>{{dataNotify.methodName}} </span>
        <span>{{dataNotify.customerIdf}}</span>
        </div>
        <div class="time-notify">
        <span><a>{{ dataNotify.transactionTime.substring(0,10).split("-").reverse().join("/")}} </a><a>{{ dataNotify.transactionTime.substring(11,19)}}</a></span>
        <span>{{dataNotify.amount.toLocaleString('vi-VN', {style: 'currency',currency: 'VND'})}}</span>
        </div>
        <div class="code-notify">
        <span>Mã Giao Dịch :  </span>
        <span>{{dataNotify.transactionCode}}</span>
        </div>
        <div class="d-flex">
        <span class="title-rule">Loại rủi ro :  </span>
        <span class="rule-notify" v-for="dataRule in dataNotify.rulesDescription" :key="dataRule">{{dataRule}}</span>
        </div>
        </div>
        <div class="overflow-auto">
        <div>
        <b-pagination-nav 
        pills size="sm" 
         
        v-model="currentPage"  
        base-url="#" 
        :total-rows="pagination.total"
        :per-page="pagination.size"
        @change="changePageNotify">
        </b-pagination-nav>
        </div>
        </div>
        </b-toast>
    </div>

    <div class="dropdown d-inline-block">
        <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown "
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color: #fff;">
            
            <b-dropdown right text="" variant="none" no-caret>
                <template #button-content>
            <img class="rounded-circle header-profile-user" style="" src="../assets/images/users/avatar-dev.jpg"
                alt="Header Avatar">
            <span class="name-nav d-none d-xl-inline-block ml-1" key="t-henry">{{emailName}}</span>
            <b-icon icon="chevron-down" class="buttonDrops" ></b-icon>
                </template>
            <b-dropdown-item >
            <router-link to="/change-password" style="color: black!important;">
                Đổi mật khẩu
            </router-link>
                </b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
        <form class="buttonLogout" >
        <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')" style="font-size: 13px;" variant="danger" v-b-modal.modal-center >
            <b-icon icon="power" ></b-icon>
            Đăng xuất</b-button>
        <div class="showLogout" >
        <b-modal id="bv-modal-example" hide-footer hide-header   >
            <b-col class="iconLogout mb-2">
            <b-icon icon="box-arrow-left" class="iconsBox"></b-icon>
            </b-col>
        <div class="d-block text-center" >
        <h3 
        style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;">Bạn có chắc chắn muốn đăng xuất không?</h3>
        </div>
        <div class="buttonSubmitLogout">
        <button class="buttonYes mt-3"  @click="handleSubmitLogout" style="font-size: 13px;">Có</button>
        <button class="buttonNo mt-3" @click="$bvModal.hide('bv-modal-example')" style="font-size: 13px;" >Không</button>
        </div>
        </b-modal>
        </div>
        </form>
            </b-dropdown>
        </button>
    </div>
</div>

</div>
</header>
    <div class="side-bar" >
    <!-- ========== Left Sidebar Start ========== -->
<div class="vertical-menu">

<div data-simplebar class="h-100">

<!--- Sidemenu -->
<div id="sidebar-menu">
    <!-- Left Menu Start -->
    <ul class="metismenu list-unstyled" id="side-menu">
        <div class="sidebar-container" style="margin-top: 80px; ">
            <div class="content-sidebar" :class=" this.DATA_PERMISSION.includes('VIEW_LIST_TRANS') ? '' : 'd-none'">
                <router-link to='/home-page' style="color: #474D52;" :class="changeHome">
                        <li>
                <b-icon icon="graph-up" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span key="t-utility">Quản lý giao dịch</span>
                </li>
                </router-link>
            </div>
            <div class="content-sidebar" :class=" this.DATA_PERMISSION.includes('VIEW_LIST_TRANS') ? '' : 'd-none'">
                <router-link to='/list-risk' style="color: #474D52;" :class="changeRisk">
                        <li>
                <b-icon icon="file-earmark-bar-graph" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span key="t-utility">Danh sách giao dịch</span>
                </li>
                </router-link>
            </div>
            <div class="content-sidebar" :class=" this.DATA_PERMISSION.includes('VIEW_LIST_USER') ? '' : 'd-none'">
                <router-link to='/list-user' style="color: #474D52;" :class="changeUser">
                        <li>
                <b-icon icon="person-circle" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span key="t-utility">Quản lý người dùng</span>
                </li>
                </router-link>
            </div>
            <div class="content-sidebar" :class=" this.DATA_PERMISSION.includes('VIEW_LIST_ROLE') ? '' : 'd-none'">
                <router-link to='/list-role' style="color: #474D52;" :class="changeRole">
                        <li>
                <b-icon icon="diagram3" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span key="t-utility">Quản lý nhóm quyền</span>
                </li>
                </router-link>
            </div>
        </div>
        
        
    </ul>
</div>
        <!-- Sidebar -->
    </div>
</div>
<!-- Left Sidebar End -->
</div>
</b-navbar>
<modal-authen />
</div>
</template>

<script>
import axios from "axios"
import { uuid } from 'vue-uuid'
import { UserService } from "@/services/user.service";
import ModalAuthen from './ModalAuthen.vue';
export default {
  components: { ModalAuthen },
    name:"index",
    data(){
        return{
        showLogout : false,
        token : localStorage.getItem('token'),
        emailName: localStorage.getItem('email'),
        userCheck: this.$store.getters.USERNAME,
        BASE_URL: this.$store.getters.BASE_URL,
        BASE_URL_NOTIFY: this.$store.getters.BASE_URL_NOTIFY,
        BASE_TOKEN_NOTIFY: this.$store.getters.BASE_TOKEN_NOTIFY,
        DATA_PERMISSION:  localStorage.getItem('permission'),
        logo:false,
        logoRisk:true,
        user: this.$store.getters.USERNAME,
        checkNotify: localStorage.getItem("isPushNotificationsEnabled"),
        playerId: localStorage.getItem('playerId'),
        // playerId: "17473597-9afb-4033-b707-0358133d9e81",
        numNotify:"",
        dataNotification:{},
        currentPage: 1,
        uuid: uuid.v1(), 
        pagination:{
            size: 5,
            total:20
        }
        }
    },
    methods:{
        clickSidebar(){
            if (this.logo==false) {
                this.logo =true,
                this.logoRisk = false
            }
            else{
                this.logo =false,
                this.logoRisk = true
            }
        },
        handleLogout(){
            this.showLogout = true
        },
        handleNo(){
            this.showLogout = false
            this.$router.push({ path: '/' })
        },
        handleSubmitLogout(){
            const headers = {
            'Content-Type': 'application/json',
            "User-Agent": "Web",
            }
            axios({
                method:'post',
                url:`${this.BASE_URL}/api/auth/logout`,
        headers: {
            headers: headers,
            Authorization: `Bearer ${this.token}`
        },
        data:{
        }
            }).then((response)=>{
                if(response.status == 200){
                    this.$router.push({ path: '/login' })
                    localStorage.removeItem('token')
                }
            }).catch((error)=>{
                return error.response;
            })
        },

        notify(e){
    if (e == true) {
        if (this.playerId) {
    const headers = {
    "Content-Type": "application/json",
    "User-Agent": "Web",
    };
        axios({
            method:"post",
            url:`${this.BASE_URL}/api/devices/mobile`,
            headers: {
            headers: headers,
            Authorization: `Bearer ${this.token}`,
            },
            data:{
                deviceIndentifier: this.uuid,
                deviceName: "THINKPAD" ,
                os: "WEB",
                osVersion: "1",
                playerId: this.playerId ,
                pushToken: "pushToken",
                uid: "WEB",
            },
        })
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            alert(error.response.message)
        })
        }else{
    setTimeout(()=>{
                window.location.reload()
            },3000)
            alert('Chưa có ID')
            }
        }
        },
        numberNotify(){
            const headers = {
        'Content-Type': 'application/json',
        "User-Agent": "Web",
        }
        axios({
        method:'get',
        url:`${this.BASE_URL_NOTIFY}/api/notifications/not-read/VIMO/${this.playerId}`,
        headers: {
            headers: headers,
            Authorization: `Bearer ${this.BASE_TOKEN_NOTIFY}`
        },
        })
        .then((response)=>{
            if (response.status == 200) {
                this.numNotify = response.data
            }
        })
        .catch((error)=>{
            return error.response
        })
        },
        checkReadAllNotify(){
            const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "User-Agent": "Web",
        }
        axios({
        method:'put',
        url:`${this.BASE_URL_NOTIFY}/api/notifications/read-all/VIMO/${this.playerId}`,
        headers: {
            headers: headers,
            Authorization: `Bearer ${this.BASE_TOKEN_NOTIFY}`
        },
        })
        .then((response)=>{
            if (response.status == 200) {
                window.location.reload()
            }
        })
        .catch((error)=>{
            return  error
        })
        },
        changePageNotify(value = 1){
        const pageValue = value - 1
        const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "User-Agent": "Web",
        }
        axios({
        method:'get',
        url:`${this.BASE_URL_NOTIFY}/api/notifications`,

        headers: {
            headers: headers,
            Authorization: `Bearer ${this.BASE_TOKEN_NOTIFY}`
        },
        params:{
            partnerApp :"VIMO",
            playerId : this.playerId,
            page: pageValue,
            size: 5
        },
        useCredentails: true 
        })
        .then((response)=>{
            if (response.status == 200) {
                this.dataNotification = response.data.riskTransList
                this.pagination.total = response.data.total
            }
        })
        .catch((error)=>{
            return error.response.data;
        })
        },
        async checkAuthen(){
            const data = {
                fullName: "Huy",
                page: 1,
                size: 10
            }
            try {
                const response = await UserService.getList(this.token,data)
                if ( response.status == 401){
                this.$bvModal.show('authen')
                }
            } catch (error) {
                return error
            }
        }
    },
    mounted(){
        this.numberNotify()
        this.changePageNotify()
        this.checkAuthen()
    },
    computed:{
        changeHome(){
            return {
                active: window.location.pathname.includes("/home-page"),
                'text-primary': window.location.pathname.includes("/home-page")
            }
        },
        changeRisk(){
            return {
                active: window.location.pathname.includes("/list-risk"),
                'text-primary': window.location.pathname.includes("/list-risk")
            }
        },
        changeUser(){
            return {
                active: window.location.pathname.includes("/list-user"),
                'text-primary': window.location.pathname.includes("/list-user")
            }
        },
        changeRole(){
            return {
                active: window.location.pathname.includes("/list-role"),
                'text-primary': window.location.pathname.includes("/list-role")
            }
        }
    }
}
</script>

<style>
.page-topbar{
        position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1002;
    box-shadow: 0 0.75rem 1.5rem rgba(18,38,63,.03);
}
#collapse-2{
    padding-left: 15px;
    white-space: nowrap;
    padding-top: 10px;
    display: flex;
}
.navbar-header{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin: 0 auto;
    height: 70px;
    padding: 0 calc(24px / 2) 0 0;
    font-family: Roboto;    
    background-color: #2a3042;
    position: absolute;
    width: 100%;
}
.metismenu li{
    list-style: none;
}
.navbar-brand-box{
    padding: 0 1.5rem;
    text-align: center;
    width: 250px;
}
.rounded-circle{
    background-color: rgba(255,255,255,.25);
    height: 36px;
    width: 36px;
    padding: 3px;
    border-radius: 50%!important;
}
.img{
    vertical-align: middle;
    border-style: none;
}
.side-bar{
width: 250px;
border-right: 2px solid black;
height: 100%;
position: absolute;
color: #474D52;
font-size: var(--f14);
}
.icons-person{
    padding: 10px 0 10px 0;
    display: flex;
    justify-content: center;
    text-align: center;
}

.title-user{
list-style-type: none;
margin: 0;
padding-left: 15px;
}
.app-search{
    border: none;
    height: 38px;
    padding-left: 40px;
    padding-right: 20px;
    box-shadow: none;
    border-radius: 30px;
    /* background-color: rgba(243,243,249,.07);
    color: #fff; */
}
.app-search .form-control{
    display: block;
    width: 100%;
    padding: .47rem .75rem;
    font-size: .8125rem;
    font-weight: 400;
    line-height: 1.5;
    background-clip: padding-box;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    background-color: rgba(243,243,249,.07);
    color: #fff;
    border-radius: 30px;
    box-shadow: none;
    border: none;
    height: 38px;
    padding-left: 40px;
    padding-right: 20px;
}
.find{
    margin-top: 6px;
    padding: 0px;
}
.name-nav{
    margin-left: .25rem!important;
    color: #fff;
    font-size: 13px;
}
.header-item {
    color: #e9ecef;
}
.header{
    width: 100%; 
    padding: 0px!important
}
.logout{
    color: rgb(240, 60, 60);
        display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: 400;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
}
.logout:hover{
    background-color:#F8F8FF;
    color: red;
}
.content-sidebar{
    width: 200px!important;
    padding: 20px;
    padding-top: 10px;
    cursor: pointer;
    transition: all .2s;
}
.buttonSubmitLogout{
    justify-content: space-between!important;
    text-align: center!important;
    min-width: 110px!important;

}
.buttonDrops{
    color: white;
    margin: 3px;
    font-size: 10px!important;
}
.buttonLogout{
    text-align: center;
    color: #f46a6a!important;
}
.buttonLogout:hover{
    color: red!important;
}
.buttonYes{
    color: #fff;
    background-color: #34c38f!important;
    border-color: #34c38f!important;
    min-width: 110px;
    margin: 8px;
    padding-top: 7.5px;
    padding-bottom: 7.5px;
    border-radius: .25rem
}
.buttonNo{
    color: #fff;
    background-color: #74788d;
    border-color: #74788d;
    min-width: 110px;
    margin: 8px;
    padding-top: 7.5px;
    padding-bottom: 7.5px;
    border-radius: .25rem
}
.showLogout{
    font-family: Roboto;
}
.iconLogout{
    text-align: center;
}
.list-notify{
    width: 320px;
    margin-left:-70px; 
}
.iconsBox{
    background-color: #eff2f7!important;
    height: 65px;
    width: 65px;
    padding: 19px;
    border-radius: 50%!important;
    color: #556ee6!important;
}
.bi-check2-circle{
    font-size: 15x;
    color: #008BF4;
}
.icon-check-notify:hover  .bi-check2-circle{
    color: #3BB54A;
}
/* .dropdown-item{
    padding: 3px;
    text-align: center;
} */
.notify:hover{
background-color:#d7d9db;
}
#title-notify{
display:flex;
justify-content: space-between;
color: #6c757d;
font-size:13px
}
.time-notify{
display:flex;
justify-content: space-between;
}
.rule-notify{
    color: red;
}
.code-notify{
    display:flex;
}
.title-rule{
    white-space: nowrap;
}
@media (max-width: 576px) {
.container,
.container-sm {
max-width: 540px;
}
.name-router{
    font-size: 13px;
}
#sidebar-menu{
display: none!important;;
}
.navbar-brand-box{
    display: none!important;
}
.list-notify{
    width: 230px;
}
} 
@media (min-width: 768px) {
#sidebar-border{
    display: none;
}
} 
@media (min-width: 992px) {
.container,
.container-lg,
.container-md,
.container-sm {
max-width: 960px;
}
#sidebar-border{
    display: none;
}
}
@media (min-width: 1200px) {
.container,
.container-lg,
.container-md,
.container-sm,
.container-xl {
max-width: 1140px;
}
#sidebar-border{
    display: none;
}
.listChange{
    display: none;
}
}
.b-sidebar {
    width: 200px!important;
}
.content-menu{
    text-align: center;
    background-color: #2a3042;
    width: 200px;
}
.b-sidebar-header{
    background-color: #2a3042 ;
}
.bi-x{
    color: #fff;
}

</style>