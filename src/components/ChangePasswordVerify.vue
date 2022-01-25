<template>
<div class="change-password">
<div class="home pages">
    <b-navbar class="header" fixed="top" style="width: 100%; padding: 0px">
<header id="page-topbar">
<div class="navbar-header">
<div class="d-flex">
    <!-- LOGO -->
    <div class="navbar-brand-box" @click="handleChange">

            <!-- <span class="logo-sm">
                <img src="../assets/images/favicon.svg" alt="" height="30">
            </span> -->
            <span class="logo-lg">
                <img src="../assets/images/risk-white.svg" alt="" height="50" width="130">
            </span>
    </div>
<div >
    <!-- show-sidebar -->
<b-button  v-b-toggle.sidebar-border variant="none"><b-icon icon="list" style="color: white; font-size: 25px;" ></b-icon></b-button>
    <!-- show-sidebar -->

        <!-- end show-sidebar -->
</div>
        <!-- end show-sidebar -->
        <!-- end show-sidebar -->
    <!-- App Search-->
    <form class="app-search d-none d-lg-block">
        <div class="position-relative">
            <input type="text" class="form-control" placeholder="Search...">
            <span class="bx bx-search-alt"></span>
        </div>
    </form>
</div>
<div class="d-flex">
    <div class="dropdown d-inline-block d-lg-none ml-2">
        <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="mdi mdi-magnify"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
            aria-labelledby="page-header-search-dropdown">
            <form class="p-3">
                <div class="form-group m-0">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username">
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="submit"><i class="mdi mdi-magnify"></i></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="dropdown d-inline-block">
        <button type="button" class="btn header-item noti-icon waves-effect" style="padding-top: 20px; color: white;" id="page-header-notifications-dropdown"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="badge badge-danger badge-pill" style="position: absolute; top: 12px; right: 4px;">3</span>
            <b-icon icon="bell" ></b-icon>
        </button>
    </div>
    <div class="dropdown d-inline-block">
        <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown "
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color: #fff;">
            
            <b-dropdown right text="" variant="none" no-caret>
                <template #button-content>
            <img class="rounded-circle header-profile-user" src="../assets/images/users/avatar-dev.jpg"
                alt="Header Avatar">
            <span class="name-nav d-none d-xl-inline-block ml-1" key="t-henry">{{emailName}}</span>
            <b-icon icon="chevron-down" class="buttonDrops" ></b-icon>
                </template>
            <b-dropdown-item @click="handleChange" >Profile</b-dropdown-item>
            <b-dropdown-item @click="handleChange" >
            <!-- <router-link to="/change-password" style="color: black!important;"> -->
                Đổi mật khẩu
            <!-- </router-link> -->
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
        <div class="sidebar-container" style="margin-top: 80px;">
            <div class="content-sidebar"  @click="handleChange">
            <li>
                <b-icon icon="graph-up" style="padding-right: 25px;"></b-icon>
                <span key="t-calendar">Quản lý giao dịch</span>
            </li>
            </div>
            <div class="content-sidebar" @click="handleChange">
                        <li>
                <b-icon icon="person-circle" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span key="t-utility">Quản lý User</span>
                </li>
            </div>
            <div class="content-sidebar" @click="handleChange">
                        <li>
                <b-icon icon="diagram3" style="padding-right: 25px; text-decoration: none;"></b-icon>
                <span key="t-utility">Quản lý nhóm quyền</span>
                </li>
                <!-- </router-link> -->
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
</div>
    <div class="content-page">
    <div class="main-content" style="padding-right: 30px;">
<div class="page-content">
    <div class="box-title box-title-fix" >
        <form action="#" @submit.prevent="handleChangePass" >
        <h2>Đổi mật khẩu</h2>
        <div class="float-right">
            <v-btn 
            type="submit" 
            style="font-size: 13px"
            class="btn btn-primary" 
            :disabled="buttonDisable"
            data-toggle="modal" 
            >Đổi mật khẩu</v-btn>
        </div>
        </form>
        <!-- ------error target--------- -->
        <b-modal id="bv-modal-example-change-password-verify" hide-footer hide-header >
        <b-col class="iconLogout mb-2">
        <b-icon icon="x-circle" class="iconsBox" style="color: red!important;"></b-icon>
        </b-col>
        <div class="d-block text-center" >
        <h3 
        style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;font-size: 22px;">Bạn phải đổi mật khẩu</h3>
        </div>
        <div class="buttonSubmitLogout">
        <button class="buttonOK mt-3"  @click="$bvModal.hide('bv-modal-example-change-password-verify')"  style="font-size: 13px;">OK</button>
        </div>
        </b-modal>
        <!-- ------end error target--------- -->

        <!-- ------------change pass--------- -->
        <b-modal id="bv-modal-example-4" hide-footer hide-header >
            <b-col class="iconLogout" style="padding:0px; padding-top: 5px;">
            <div class="mb-img mb-4">
                        <span><img src="../assets/images/sussecc.svg" alt=""></span>
                    </div>
            </b-col>
        <div class="d-block text-center" >
        <h3 
        style="font-size: 1.21875rem; color: rgb(73, 80, 87); margin-bottom: .5rem;font-weight: 500;line-height: 1.2;font-size: 22px;">Đổi mật khẩu thành công</h3>
        <div class="mb-text ">
                        <p style="font-size: 13px;" >Bạn đã đổi mật khẩu thành công<br/>Vui lòng đăng nhập lại</p>
                    </div>
        </div>
        <div class="buttonSubmitLogout">
            <router-link to="/">
        <button class="buttonOK mt-3"  style="font-size: 13px;">OK</button>
        </router-link>
        </div>
    </b-modal>
        <!-- ------------change pass--------- -->
        <!-- ---------error change password----- -->
    <b-modal id="bv-modal-example-error-change-password-verify" hide-footer hide-header >
        <b-col class="iconLogout mb-2">
        <b-icon icon="x-circle" class="iconsBox" style="color: red!important;"></b-icon>
        </b-col>
        <div class="d-block text-center" >
        <span>{{ errorMessage }}</span>
        </div>
        <div class="buttonSubmitLogout">
        <button class="buttonOK mt-3"  @click="$bvModal.hide('bv-modal-example-error-change-password-verify')"  style="font-size: 13px;">OK</button>
        </div>
        </b-modal>
            <!-- ---------end error change password----- -->

    </div>
    <!-- box-content -->
    <div class="card form-fix" >
        <div class="row">
            <div class="col-sm-6">
                <div class="card-body">
                    <!-- <h4 class="card-title mb-3">Thông tin nhân viên</h4> -->
                    <form class="form-horizontal" action="#" @keyup.enter="handleChangePass"  >
                <div class="col-md-6" style="padding:0px!important;">
                        <div class="form-group" style="width: 375px;">
                            <label for="validationCustom01">Mật khẩu cũ</label>
                            <v-text-field 
                            class="form-control"
                            style="padding: 1px 0px!important; font-size: 14px; padding-bottom: 0px!important; "
                            id="validationCustom01" 
                            placeholder="******" 
                            @click:append="show1 = !show1"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            value="" 
                            required 
                            v-model="oldPass">
                            </v-text-field>
                            <div class="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                        <div class="form-group" style="width: 375px;">
                            <label for="validationCustom01">Mật khẩu mới</label>
                            <v-text-field 
                            class="form-control"
                            style="padding: 1px 0px!important; font-size: 14px; padding-bottom: 0px!important; "
                            id="validationCustom01" 
                            placeholder="******" 
                            @click:append="show2 = !show2"
                            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show2 ? 'text' : 'password'"
                            value="" 
                            required 
                            v-model="newPass">
                            </v-text-field>
                            <div class="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                        <div class="form-group" style="width: 375px;">
                            <label for="validationCustom01">Nhập lại mật khẩu</label>
                            <v-text-field 
                            class="form-control"
                            style="padding: 1px 0px!important; font-size: 14px; padding-bottom: 0px!important; "
                            id="validationCustom01" 
                            :error-messages="this.confirmPass != this.newPass ? 'Nhâp lại mật khẩu không khớp' : '' "
                            placeholder="******" 
                            @click:append="show3 = !show3"
                            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show3 ? 'text' : 'password'"
                            value="" 
                            required 
                            v-model="confirmPass">
                            </v-text-field>
                            <div class="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                        
                    </div>
            </form>
                </div>
            </div>
            <div class="col-sm-6">
                <ul class="card-body" style="   margin-top: 35px;padding-left: 0px!important;">
                    <li class="text-pass d-block" >Mật khẩu tối thiểu 6 ký tự và tối đa 25 kí tự</li>
                    <li class="text-pass d-block" >Mật khẩu phải có :</li>
                    <ul class="text-pass d-block" style="padding-left: 20px"> <li> Chữ thường </li></ul>
                    <ul class="text-pass d-block" style="padding-left: 20px"> <li> Chữ in hoa </li></ul>
                    <ul class="text-pass d-block" style="padding-left: 20px"> <li> Một số </li></ul>
                    <ul class="text-pass d-block" style="padding-left: 20px"> <li> Ký tự đặc biệt như !,@,#... </li></ul>
                </ul>
            </div>
        </div>
                
    </div>
    <!-- Modal Thêm mới -->
 
    <!-- InstanceEndEditable -->
</div> <!-- container-fluid -->
</div>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
//   components: { index },
name:"change-password-verify",
data(){
    return{
        newPass:"",
        oldPass:"",
        confirmPass:"",
        emailName: localStorage.getItem('email'),
        BASE_URL: this.$store.getters.BASE_URL,
        token : localStorage.getItem('token'),
        show1: false,
        show2: false,
        show3: false,
        showConfirm: false,
        errorMessage:"",
        
    }
},
methods:{
    handleChange(){
        this.$bvModal.show("bv-modal-example-change-password-verify")
    },
    submit() {
    // this.$v.$touch()
    },
    handleSubmitLogout(){
        this.$router.push({ path: '/login' })
        },
    handleChangePass(){
        const data = {
            newPass: this.confirmPass,
            oldPass: this.oldPass
        }
        const headers =  {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent": "Web",
        Authorization: `Bearer ${this.token}`,
        }
            if (this.confirmPass == this.oldPass) {
                this.$bvModal.show('bv-modal-example-error-change-password-verify')
            this.errorMessage = "Đổi mật khẩu thất bại. Mật khẩu trùng với mật khẩu cũ trước đó."
            }
                // -------end error------//
            else if ( this.newPass == this.confirmPass ){
                axios({
                    method:"post",
                    url:`${this.BASE_URL}/api/auth/change-password`,
                    headers: headers,
                    data : data
                })
            .then((response)=>{
                if(response.status == 200){
                    this.$bvModal.show('bv-modal-example-4')
                }
            })
            .catch((error) => {
                if (error.response.status == 400) {
                    this.$bvModal.show('bv-modal-example-error-change-password-verify')
                    this.errorMessage = error.response.data.responseStatusMessage
                }else{
                    this.$bvModal.show('bv-modal-example-error-change-password-verify')
                }
            return error.response;
        });
        }
        // -------error------//
        else if (this.newPass != this.confirmPass) {
            this.$bvModal.show('bv-modal-example-error-change-password-verify')
            this.errorMessage = "Mật khẩu không khớp"
        }
        // -------end error------//
        
            
    }
},
computed:{
        buttonDisable(){
            return this.newPass.length <=5 || this.oldPass.length <= 5 || this.confirmPass.length <= 5 || this.newPass != this.confirmPass
        }
    }
}
</script>

<style >
.content-page{
    background-color: #ffff; 
    padding-left:230px
    
}
.main-content{
    background-color: #F8F8FB!important;
    padding:20px;
}
.change-password{
    background-color: #f8f8fb;
    /* padding: 0px;
    margin: 0px;
    font-size: 13px; */
}
.modal-dialog .modal-md{
    margin-top: 175px!important;
}
.text-pass{
    color:#495057;
    font-size: 12px;
}
@media (max-width: 576px) {
.content-page,
.container-sm {
max-width: 540px;
padding-left: 0px!important;
}
#sidebar-menu{
display: none!important;;
}
} 
@media (min-width: 768px) {

} 
@media (min-width: 992px) {
.container,
.container-lg,
.container-md,
.container-sm {
max-width: 960px;
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
}
#sidebar-border{
    display: none;
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