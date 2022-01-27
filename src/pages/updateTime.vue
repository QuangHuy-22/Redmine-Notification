<template>
  <div class="recover">
<NavBar />
    <!-- -----------content----------- -->
    <!-- -----------Update Time----------- -->
  
    <div class="account-pages pb-4 pt-sm-5" >
      <!-- <div class="container"> -->
      <div class="row justify-content-center" style="padding-bottom: 38px;">
        <div class="col-md-8 col-lg-6 col-xl-5" style="padding: 60px 50px;">
          <div class="card overflow-hidden">
            <div class="bg-danger">
              <div class="form-row">
                <div class="col-7">
                  <div class="text-white p-4">
                    <h5 class="pt-3" style="font-size: 15px;">
                      Cập nhật thời gian logtime !
                    </h5>
                    <p class="m-0" style="font-size: 13px;">
                      Nhập số giờ để cập nhật.
                    </p>
                  </div>
                </div>
                <div class="col-5 align-self-end" style="padding: 0px;">
                  <img
                    src="../assets/images/profile-img.png"
                    style="padding: 0px;"
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
                <form
                  class="form-horizontal"
                  action="#"
                  @submit.prevent="handleUpdate"
                >
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="validationCustom01"
                        >Cập nhật số giờ logtime trong tuần</label
                      >
                      <v-text-field
                        type="number"
                        class="form-control"
                        style="padding: 1px 0px!important; font-size: 14px; padding-bottom: 0px!important; "
                        id="validationCustom01"
                        placeholder="Nhập số giờ logtime trong tuần"
                        value=""
                        required
                        v-model="timeWeekDto"
                      >
                      </v-text-field>
                      <div class="invalid-feedback">
                        Please provide a valid city.
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <div class="col-12 pr-4 text-right">
                      <button
                        class="btnRecover btn  w-md waves-effect waves-light bg-danger"
                        style="font-size: 13px;"
                        type="submit"
                        :disabled="buttonDisable"
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
      <!-- -----------End Update Time----------- -->
  </div>
</template>

<script>
import { UserService } from "@/services/user.service.js";
import NavBar from "./NavBar.vue"
import Swal from 'sweetalert2';
export default {
  name: "updateTimeLogtime",
    components: { NavBar },
  data() {
    return {
      timeWeekDto: "",
      token: localStorage.getItem("token"),
      username: localStorage.getItem("username"),
      BASE_URL: this.$store.getters.BASE_URL,
      showSuccess: false,
      errorMessage: "",
      loading: {
        isLoading: false,
        fullPage: true,
      },
    };
  },
  validations: {},
  methods: {
    submit() {
      this.$v.$touch();
    },
    showModal() {
      this.$router.push({ path: "/verify" });
    },
    

    async handleUpdate() {
      try {
        const response = await UserService.updateTime(this.token, this.timeWeekDto)
        if (response.status == 200) {
          Swal.fire({
            icon:"success",
            title:"Cập nhật giờ thành công"
          })
        }
        else{
          Swal.fire({
            icon:"error",
            title:"Cập nhật giờ thất bại"
          })
        }
      } catch (error) {
        console.log(error);
      }
    },

  },
  computed: {
    buttonDisable() {
      return this.timeWeekDto.length <= 0;
    },
  },
};
</script>

