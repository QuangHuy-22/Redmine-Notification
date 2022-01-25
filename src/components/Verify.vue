<template>
<div class="verify">
<div class="account-pages my-5 pt-sm-5" style="margin-top: 0px!important; margin-bottom: 0px!important; padding-bottom: 87px;">
<div class="row">
<div class="col-lg-12">
<div class="text-center mb-5 text-muted">
<a href="index.html" class="d-block auth-logo">
    <img src="../assets/images/risk-color.svg" alt="" height="60" class="auth-logo-dark mx-auto">
</a>
</div>
</div>
</div>
<div class="row justify-content-center">
<div class="col-md-8 col-lg-6 col-xl-5" style="padding: 10px 50px 0px !important;">
<div class="card">

<div class="card-body"> 
    
    <div class="p-2">
        <div class="text-center">

            <div class="avatar-md mx-auto">
                <div class="avatar-title  " >
                    <b-icon class=" rounded-circle bg-light" style="color: #556ee6!important;" icon="envelope-fill" ></b-icon>
                </div>
            </div>
            <div class="p-2 mt-4">
                <h4>Xác thực email</h4>
                <p>Chúng tôi đã gửi cho bạn email xác minh <span style="font-weight: bold;">{{checkMail}}</span>,Vui lòng kiểm tra email</p>
                <div class="mt-4">
                    <!-- <router-link to="https://mail.google.com/mail/u/0/#inbox"> -->
                    <a class="btnConfirm btn w-md" href="https://mail.google.com">Xác thực email</a>
                    <!-- </router-link> -->
                </div>
            </div>
        </div>
    </div>

</div>
</div>
<div class="mt-5 text-center">
<p>© 2021 Risk Manager by Nextpay</p>
</div>

</div>
</div>
<!-- </div> -->
</div>
</div>
</template>

<script>
export default {
    name:"verify",

    data(){
        return{
            checkMail: this.$store.getters.FORGET_USERNAME
            
        }
    }
}
</script>

<style>
.verify{
    background-color: #f8f8fb;
    padding: 0px;
    margin: 0px;
    font-size: 13px;
}
.avatar-title{
    width: 100%;
}
.btnConfirm{
    background-color: #34c38f!important;
    color: white!important;
}
.btnConfirm:hover{
    background-color: rgb(24, 190, 121)!important;
}
</style>