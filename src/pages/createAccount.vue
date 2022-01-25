<template>
  <div class="recover">
    <NavBar />
    <ValidationObserver ref="observerProduct" v-slot="{ validate, invalid }">
      <!-- -----------content----------- -->
      <!-- ----------------Create Account---------- -->
      <div class="account-pages pb-4 pt-sm-5">
        <!-- <div class="container"> -->
        <div class="row justify-content-center" style="padding-bottom: 38px;">
          <div class="col-md-8 col-lg-6 col-xl-5" style="padding: 60px 50px;">
            <div class="card overflow-hidden">
              <div class="bg-info  ">
                <div class="form-row">
                  <div class="col-7">
                    <div class="text-white p-4">
                      <h5 class="pt-3" style="font-size: 15px;">
                        Thêm mới tài khoản người dùng
                      </h5>
                      <p class="m-0" style="font-size: 13px;">
                        Nhập số giờ để cập nhật.
                      </p>
                    </div>
                  </div>
                  <div class="col-5 align-self-end" style="padding: 0px;">
                    <img
                      src="../assets/images/megamenu-img.png"
                      style="padding: 0px;height: 150px"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div
                class="card-body  pt-3"
                style="padding-top: 0px!important; padding-bottom: 0px!important;"
              >
                <div class="p-2">
                  <!-- <div class="alert alert-success text-center mb-4 p-2" v-show="showSuccess" role="alert"  >
                    Email đã được gửi, vui lòng truy cập email để lấy lại mật khẩu!
                </div> -->
                  <form
                    class="form-horizontal"
                    action="#"
                    @submit.prevent="handleCreateAccount(validate)"
                  >
                    <div class="col-md-12">
                      <!-- ----------Tài khoản----------- -->
                      <div class="form-group">
                        <b-form-group label="" label-for="formrow-email-input">
                          <validation-provider
                            name="Email"
                            rules="lBetween:6,255|EMAIL|CHECK_HTML|required"
                            v-slot="{ errors, valid }"
                          >
                            <label>Tài khoản người dùng</label>
                            <b-form-input
                              id="formrow-email-input"
                              type="text"
                              placeholder="Nhập địa chỉ email"
                              v-model="user"
                              :state="
                                errors[0]
                                  ? false
                                  : valid && user != ''
                                  ? true
                                  : null
                              "
                            />

                            <b-form-invalid-feedback>{{
                              errors[0]
                            }}</b-form-invalid-feedback>
                          </validation-provider>
                        </b-form-group>
                      </div>
                      <!-- ----------Mật khẩu ----------- -->
                      <div class="form-group">
                        <b-form-group label="" label-for="formrow-email-input">
                          <validation-provider
                            name="Mật khẩu"
                            rules="required|lBetween:6,20|PASSWORD_1|CHECK_HTML"
                            v-slot="{ errors, valid }"
                          >
                            <label>Mật khẩu</label>

                            <b-form-input
                              id="formrow-email-input"
                              type="password"
                              placeholder="******"
                              v-model="password"
                              :state="
                                errors[0]
                                  ? false
                                  : valid && password != ''
                                  ? true
                                  : null
                              "
                            />

                            <b-form-invalid-feedback>{{
                              errors[0]
                            }}</b-form-invalid-feedback>
                          </validation-provider>
                        </b-form-group>
                      </div>
                    </div>
                    <div class="form-group row mb-0">
                      <div class="col-12 pr-4 text-right">
                        <button
                          class="btnRecover btn  w-md waves-effect waves-light bg-info "
                          style="font-size: 13px;"
                          type="submit"
                          :disabled="invalid"
                          @click="submit"
                        >
                          Cập nhật
                        </button>
                      </div>
                    </div>
                  </form>
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
        </div>
        <!-- </div> -->
      </div>
      <!-- ----------------End Create Account---------- -->
    </ValidationObserver>
  </div>
</template>

<script>
import { UserService } from "@/services/user.service.js";
import Swal from "sweetalert2";
import NavBar from "./NavBar.vue";
export default {
  name: "create-account",
  components: { NavBar },
  data() {
    return {
      token: localStorage.getItem("token"),
      username: localStorage.getItem("username"),
      showSuccess: false,
      errorMessage: "",
      loading: {
        isLoading: false,
        fullPage: true,
      },
      user: "",
      password: "",
      confirmPass: "",
    };
  },
  validations: {},
  methods: {
    submit() {
    },
    async handleCreateAccount(validate) {
      this.loading.isLoading = true;
      validate().then(async (success) => {
        if (!success) {
          const el = document.querySelector(".is-invalid");
          el.focus();
          return;
        } else {
          try {
            const data = {
              username: this.user,
              password: this.password
            }
            const response = await UserService.createAccount(this.token, data)
            if (response.status == 200) {
                Swal.fire({
                icon:"success",
                title:"Tạo mới tài khoản thành công",
                confirmButtonText: "OK",
            }).then((result)=>{
              if (result) {
                this.$router.push({ path:`/update-time-logtime` });
              }
            })
            }
            else {
              if (response.data.message == "Username already") {
                Swal.fire({
                  icon:"error",
                  title:"Tạo mới tài khoản thất bại",
                  text: "Tài khoản đã tồn tại",
                  confirmButtonText: "OK",
              })
              }
              else{
                Swal.fire({
                  icon:"error",
                  title:"Tạo mới tài khoản thất bại",
                  confirmButtonText: "OK",
              })
              }
            }
          } catch (error) {
            console.log(error);
          } finally{
            this.loading.isLoading = false;
          }
        }
      });
    },
  },
  computed: {},
};
</script>
