<template>
<div class="account-pages sm-5">
<div class="container-content">
    <div class="row justify-content-center">
    <div class="col-md-8 col-lg-6 col-xl-5" style="padding: 55px;">
        <div class="card overflow-hidden">
        <div class="bg-danger progress-bar">
            <div class="form-row">
            <div class="col-7">
                <div class="text-login p-4">
                <h5 class="pt-3">Đăng nhập</h5>
                <p class="m-0">Chào mừng bạn quay trở lại !</p>
                </div>
            </div>
            <div class="col-5 align-self-end">
                <img
                src="../assets/images/error-img.png"
                alt=""
                class="img-fluid"
                />
            </div>
            </div>
        </div>
        <div class="card-body pt-3">
            <div class="p-2" style="padding:0px !important">
            <form
                class="form-horizontal"
                action="#"
                @submit.prevent="handleSubmitLogin"
            >
                <div class="form-group">
                <label for="username">Tài khoản/Email</label>
                <input
                    v-model="username"
                    type="email"
                    class="form-control"
                    id="username"
                    placeholder="abc@email.com"
                    style="font-size: 0.8125rem;"
                />
                </div>

                <div class="form-group">
                <label for="userpassword">Mật khẩu</label>
                <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="userpassword"
                    placeholder="******"
                />
                </div>
                <div class="  mt-3">
                <v-btn
                    @keyup.enter="handleSubmitLogin"
                    type="submit"
                    :disabled="buttonDisable"
                    class="btn-block waves-effect waves-light"
                    style="color:#fff; font-size: 13px; padding: 7.5px 12px; background-color:#dc3545"
                    >Đăng nhập
                </v-btn>
                </div>

                <div class="mt-4 text-center" @click="recover">
                    <a class="text-muted"
                    ><b-icon icon="lock-fill"></b-icon> Quên mật khẩu ?</a
                    >
                </div>
                <!-- ----------modal error-------->
                <b-modal
                id="bv-modal-example-error-login"
                hide-footer
                hide-header
                >
                <b-col class="iconLogout mb-2">
                    <b-icon
                    icon="x-circle"
                    class="iconsBox"
                    style="color: red!important;"
                    ></b-icon>
                </b-col>
                <div class="d-block text-center">
                    <span>{{ this.errorMessage }}</span>
                </div>
                <div class="buttonSubmitLogout">
                    <!-- <router-link to="/list-role"> -->
                    <b-button
                    variant="primary"
                    class="buttonOK mt-3"
                    @click="$bvModal.hide('bv-modal-example-error-login')"
                    >OK</b-button
                    >
                    <!-- </router-link> -->
                </div>
                </b-modal>
                <!-- ----------end modal error-------->
            </form>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
<Loading
    :active="loading.isLoading"
    :can-cancel="true"
    :is-full-page="loading.fullPage"
>
</Loading>
</div>
</template>

<script scoped>
import { UserService } from "@/services/user.service.js";
import Swal from "sweetalert2";
export default {
name: "LoginPage",
props: {
// email
},
data() {
return {
    username: "",
    password: "",
    token: "",
    email: "",
    BASE_URL: this.$store.getters.BASE_URL,
    dataPermission: [],
    errorMessage: "",
    loading: {
    isLoading: false,
    fullPage: true,
    },
};
},
methods: {
async handleSubmitLogin() {
    const data = {
    username: this.username,
    password: this.password,
    };
    this.loading.isLoading = true;
    try {
    const response = await UserService.loginRedmineLogtime(data);
    if (response.status == 200) {
        this.$router.push({ path:`/update-time-logtime` });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.data.username);
        localStorage.setItem("userId", response.data.data.id);
    }
    else {
        this.errorNotifi(response.data.message)
    }
    this.loading.isLoading = false;
    } catch (error) {
    console.error(error);
    } finally {
    this.loading.isLoading = false;
    }
},
errorNotifi(data) {
    if (data == "Password wrong") {
        Swal.fire({
            icon: "error",
            title:'Đăng nhập thất bại',
            text: "Mật khẩu không chính xác",
            confirmButtonText: "Xác nhận",
            confirmButtonColor: "#DC2323",
        });
    }
    else if (data == "wrong username") {
        Swal.fire({
            icon: "error",
            title:'Đăng nhập thất bại',
            text: "Tài khoản không chính xác",
            confirmButtonText: "Xác nhận",
            confirmButtonColor: "#DC2323",
        });
    }
    else {
        Swal.fire({
            icon: "error",
            title:'Đăng nhập thất bại',
            confirmButtonText: "Xác nhận",
            confirmButtonColor: "#DC2323",
        });
    }
},
async recover(){
    const { value: username } = await Swal.fire({
    title: 'Quên mật khẩu',
    input: 'email',
    inputLabel: 'Nhập email để lấy lại mật khẩu',
    inputPlaceholder: 'vd:abc@gmail.com'
    })

    if (username) {
        try {
            const data = {username : username}
            const response = await UserService.forgetPassword(data)
            if (response.status == 200) {
            Swal.fire({
                icon:"success",
                title:"Quên mật khẩu thành công",
                text: `Vui lòng kiểm tra email: ${username} `
            })
            }
            else{
                Swal.fire({
            icon: "error",
            title:'Quên mật khẩu thất bại',
            text:"Email không tồn tại",
            confirmButtonText: "Xác nhận",
            confirmButtonColor: "#DC2323",
            });
            }
        } catch (error) {
            console.log(error);
        }

    
    }
}
},
computed: {
buttonDisable() {
    return this.username.length <= 5 || this.password.length <= 5;
},
},
mounted() {},
};
</script>

<style>
template {
background-color: #f8f8fb;
}
.container-content {
margin: 0px !important;
width: 100% !important;
}
.comp-login {
font-family: Poppins, sans-serif;
padding: 0px;
margin: 0px;
background-color: #f8f8fb;
font-family: Roboto;
}
.card {
font-size: 0.8125rem;
text-align: left;
border: 0px !important;
box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 9%);
}

.card-body {
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
min-height: 1px;
padding: 2rem 1.5rem 1.3rem 1.5rem !important;
}
.textPrimary {
color: #556ee6 !important;
padding-top: 6px !important;
text-align: left;
}

.form-row {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
margin-right: -5px;
margin-left: -5px;
}
.btnPrimary {
color: #fff;
background-color: #556ee6 !important;
border-color: #556ee6 !important;
border-radius: 0.25rem;
border: 0px !important;

/* font-size: px */
}
.btnPrimary:hover {
background-color: #0000e6 !important;
}
.bg-soft-primary {
background-color: rgba(85, 110, 230, 0.25) !important;
}
.mdi-chevron-down::before {
content: "\F0140";
}
.footer {
color: rgb(73, 80, 87);
font-size: 13px;
}
.text-muted {
color: rgb(73, 80, 87);
}
.text-login {
color: #fff;
}
.buttonOK {
font-size: 13px;
width: 100px;
}
</style>
