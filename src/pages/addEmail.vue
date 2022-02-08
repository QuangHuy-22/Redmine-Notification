<template>
  <div class="recover">
    <NavBar />

<ValidationObserver ref="observerProduct" v-slot="{ validate, invalid }">    <!-- -----------content----------- -->
    <!-- ----------------Create Account---------- -->
    <div class="account-pages pb-4 pt-sm-5">
      <!-- <div class="container"> -->
      <div class="row justify-content-center" style="padding-bottom: 38px;">
        <div class="col-md-8 col-lg-6 col-xl-5" style="padding: 60px 50px;">
          <div class="card overflow-hidden">
            <div class="bg-success">
              <div class="form-row">
                <div class="col-7">
                  <div class="text-white p-4">
                    <h5 class="pt-3" style="font-size: 15px;">
                      Thêm email nhận thông báo
                    </h5>
                  </div>
                </div>
                <div class="col-5 align-self-end" style="padding: 0px;">
                  <img
                    src="../assets/images/verification-img.png"
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
                  @submit.prevent="handleAddEmail(validate)"
                >
                  <div class="form-row">
                    <div class="col-md-12">
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
                              v-model="email"
                              :state="
                                errors[0]
                                  ? false
                                  : valid && email != ''
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
                  </div>
                  <div class="form-group row mb-0">
                    <div class="col-12 pr-4 text-right">
                      <button
                        class="btnRecover btn  w-md waves-effect waves-light bg-success  "
                        style="font-size: 13px;"
                        type="submit"
                        @click="submit"
                        :disabled="invalid"
                      >
                        Thêm mới
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
</ValidationObserver>
    <!-- ----------------End Create Account---------- -->
  </div>
</template>

<script>
import { UserService } from "@/services/user.service.js";
import Swal from 'sweetalert2';
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
      email:""
    };
  },
  validations: {},
  methods: {
    submit() {},
    async handleAddEmail(validate){
        this.loading.isLoading = true;
      validate().then(async (success) => {
        if (!success) {
          const el = document.querySelector(".is-invalid");
          el.focus();
          return;
        } else {
          try {
            const data = {
              mail: this.email
            }
            console.log(data);
            const response = await UserService.addEmail(this.token, data)
            if (response.status == 201) {
              console.log(response);
              Swal.fire({
                icon:"success",
                title:`Thêm email : ${response.data.data.mail} nhận thông báo thành công`,
            })
            } else if (response.data.message == "username da ton tai") {
              Swal.fire({
                icon:"error",
                title:`Thêm mới email thất bại`,
                text:`Email: ${this.email} đã tồn tại`
            })
            }
            else{
              Swal.fire({
                icon:"error",
                title:"Thêm mới email thất bại"
              })
            }
          } catch (error) {
            console.log(error);
          } finally{
            this.loading.isLoading = false;
          }
        }
        })
    }
  },
  computed: {},
};
</script>
