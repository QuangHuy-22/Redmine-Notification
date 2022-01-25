<template>
<div class="recover">
<div class="account-pages pb-4 pt-sm-5">
<!-- <div class="container"> -->
<div class="row justify-content-center" style="padding-bottom: 38px;">
<div class="col-md-8 col-lg-6 col-xl-5" style="padding: 60px 50px;">
<div class="card overflow-hidden">
    <div class="bg-soft-primary">
        <div class="form-row">
            <div class="col-7">
                <div class="text-primary p-4">
                    <h5 class="text-primary pt-3" style="font-size: 15px;">Quên mật khẩu !</h5>
                    <p class="m-0" style="font-size: 13px;" >Nhập email để lấy lại mật khẩu.</p>
                </div>
            </div>
            <div class="col-5 align-self-end" style="padding: 0px;">
                <img src="../assets/images/profile-img.png" style="padding: 0px;" alt="" class="img-fluid">
            </div>
        </div>
    </div>
    <div class="card-body  pt-3" style="padding-top: 0px!important; padding-bottom: 0px!important;"> 
        
        
        <div class="p-2">
            <div class="alert alert-success text-center mb-4 p-2" v-show="showSuccess" role="alert"  >
                Email đã được gửi, vui lòng truy cập email để lấy lại mật khẩu!
            </div>
            <form class="form-horizontal" action="#" @submit.prevent="handleRecover" >
                <div class="col-md-12">
                        <div class="form-group" >
                            <label for="validationCustom01">Email</label>
                            <v-text-field 
                            type="text" 
                            class="form-control"
                            style="padding: 1px 0px!important; font-size: 14px; padding-bottom: 0px!important; "
                            id="validationCustom01" 
                            placeholder="abc@email.com" 
                            value="" 
                            :error-messages="emailErrors"
                            required 
                            v-model="username">
                            </v-text-field>
                            <div class="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                        
                    </div>
                <div class="form-group row mb-0">
                    <div class="col-12 text-right">
                        <button 
                        class="btnRecover btn  w-md waves-effect waves-light" 
                        style="font-size: 13px; background-color: rgb(85, 110, 230); "
                        type="submit"
                        :disabled="buttonDisable"
                        @click="submit"
                        >Lấy lại mật khẩu</button>
                    </div>
                </div>

            </form>
        </div>

    </div>
</div>
<!-- --------error recover-------- -->
    <b-modal id="bv-modal-example-error-recover" hide-footer hide-header >
    <b-col class="iconLogout mb-2">
    <b-icon icon="x-circle" class="iconsBox" style="color: red!important;"></b-icon>
    </b-col>
    <div class="d-block text-center" >
    <span>{{ errorMessage }}</span>
    </div>
    <div class="buttonSubmitLogout">
    <button class="buttonOK mt-3"  @click="$bvModal.hide('bv-modal-example-error-recover')"  style="font-size: 13px;">OK</button>
    </div>
    </b-modal>
<!-- --------end error recover-------- -->
<div class="mt-5 text-center">
    <p>© 2021 Risk Manager by Nextpay</p>
</div>
<Loading
    :active="loading.isLoading"
    :can-cancel="true"
    :is-full-page="loading.fullPage">
</Loading>
</div>
</div>
<!-- </div> -->
</div>
</div>
</template>

<script>
import axios from 'axios';
import { required, } from "vuelidate/lib/validators";
import store from "../store/index"
export default {
    name: "recover",
    data (){
        return{
            username:"",
            reg: /^[\w-._+%]+@(mpos|vimo|nextpay|gmail)\.vn|.com$/,
            reg1: /^[\w-._+%]+@(peacesoft)\.net$/,
            token : localStorage.getItem('token'),
            BASE_URL: this.$store.getters.BASE_URL,
            showSuccess:false,
            errorMessage:"",
            loading: {
            isLoading: false,
            fullPage: true
            },
        }
    },
    validations:{
        username: { required },
    },
    methods:{
        submit() {
    this.$v.$touch()
    },
    showModal(){
        this.$router.push({path:"/verify"})
    },
        handleRecover(){
            const data = {
                email: this.username
            }
            const headers =  {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent": "Web",
        }
        this.loading.isLoading = true
            axios({
                method:'post',
                url:`${this.BASE_URL}/api/auth/forget-password`,
                headers: {
                    headers,
                    },
                    data: data
            })
            .then((response)=>{
                this.loading.isLoading = false
                store.commit("FORGET_USERNAME", this.username)
                if(response.status == 200) {
                    this.showSuccess = true     
                    setTimeout(this.showModal, 3000)      
                    
                }
            })
            .catch((error)=>{
                this.loading.isLoading = false
                if (error.response) {
            this.$bvModal.show("bv-modal-example-error-recover")
            this.errorMessage = error.response.data.responseStatusMessage
                }
            return error.response;
        })
        }
    },
    computed:{
        emailErrors() {
    const errors = [];
    if (!this.$v.username.$dirty) return errors;
    return this.username == ""
        ? "Bắt buộc điền E-mail"
        : this.reg.test(this.username) || this.reg1.test(this.username)
        ? ""
        : " Email không đúng định dạng";
    },

        buttonDisable(){
            return this.username.length <=1
        }
    }
}
</script>

<style>
.recover{
    background-color: #fff;
    padding: 0px;
    margin: 0px;
    font-size: 13px;
}
.btnRecover{
    color: white!important;
}
.btnRecover:hover{
    background-color: #0000e6 !important;
}
</style>