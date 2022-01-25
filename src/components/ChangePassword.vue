<template>
<div class="change-password">
    <index />
    <div class="content-page">
    <div class="main-content" style="padding-right: 30px;">
<div class="page-content">
    <div class="box-title box-title-fix" >
        <form action="#" @submit.prevent="handleChangePass" >
        <h2>Đổi mật khẩu</h2>
        <div class="float-right">
            <v-btn 
            type="submit" 
            style="font-size: 13px;color: #ffff"
            class="btn btn-primary" 
            data-toggle="modal" 
            :disabled="buttonDisable"
            >Đổi mật khẩu
            </v-btn>
        </div>
        </form>
        <!-- -------change password------- -->
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
        <!-- -------end change password------- -->
        <!-- -------error change password------- -->
        <b-modal id="bv-modal-example-error-change-password" hide-footer hide-header >
        <b-col class="iconLogout mb-2">
        <b-icon icon="x-circle" class="iconsBox" style="color: red!important;"></b-icon>
        </b-col>
        <div class="d-block text-center" >
        <span>{{ errorMessage }}</span>
        </div>
        <div class="buttonSubmitLogout">
        <button class="buttonOK mt-3"  @click="$bvModal.hide('bv-modal-example-error-change-password')"  style="font-size: 13px;">OK</button>
        </div>
        </b-modal>
        <!-- -------end error change password------- -->
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
                            <label for="validationCustom01" >Mật khẩu mới</label>
                            <div class="huy">
                            <v-text-field 
                            v-tooltip.bottom="message"
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
                            </div>
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
<Loading
    style="padding-left:230px"
    :active="loading.isLoading"
    :can-cancel="true"
    :is-full-page="loading.fullPage">
</Loading>
</div>
</div>
</template>

<script>
import axios from 'axios'
import index from '../components/index.vue'
export default {
components: { index },
name:"change-password",
data(){
    return{
        newPass:"",
        oldPass:"",
        confirmPass:"",
        BASE_URL: this.$store.getters.BASE_URL,
        token : localStorage.getItem('token'),
        show1: false,
        show2: false,
        show3: false,
        showConfirm: false,
        errorMessage:"",
        message:"Mật khẩu tối thiểu 6 ký tự và tối đa 25 kí tự, chữ in hoa, in thường, số và ký tự đặc biệt như !,@,#",
        loading: {
        isLoading: false,
        fullPage: true
        },  
        
    }
},
methods:{
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
                this.$bvModal.show('bv-modal-example-error-change-password')
            this.errorMessage = "Mật khẩu mới trùng với mật khẩu cũ"
            }
                // -------end error------//
            else if ( this.newPass == this.confirmPass ){
                this.loading.isLoading = true
                axios({
                    method:"post",
                    url:`${this.BASE_URL}/api/auth/change-password`,
                    headers: headers,
                    data : data
                })
            .then((response)=>{
                if(response.status == 200){
                    this.$bvModal.show('bv-modal-example-4')
                    this.loading.isLoading = false
                }
            })
            .catch((error) => {
                if (error.response.status == 400) {
                    this.loading.isLoading = false
                    this.$bvModal.show('bv-modal-example-error-change-password')
                    this.errorMessage = error.response.data.responseStatusMessage
                }else{
                    this.loading.isLoading = false
                    this.$bvModal.show('bv-modal-example-error-change-password')
                }
            return error.response;
        })
        }
        // -------error------//
        else if (this.newPass != this.confirmPass) {
            this.$bvModal.show('bv-modal-example-error-change-password')
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

<style scoped>
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
}
.modal-dialog{
    margin-top: 175px!important;
}
.text-pass{
    color:#495057;
    font-size: 12px;
}
@media (max-width: 576px) {
.container,
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

.form-control .huy:hover{
    display: none;
}
</style>