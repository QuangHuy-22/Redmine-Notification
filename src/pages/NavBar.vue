<template>
  <div class="recover">
    <!-- -------------------Navbar---------------- -->
    <div>
      <b-navbar
        toggleable="lg"
        type="dark"
        :variant="
          location == '/create-account'
            ? 'info'
            : location == '/add-email'
            ? 'secondary '
            : 'danger'
        "
      >
        <b-navbar-brand href="#">
          <img src="../assets/images/bell.png" class="imageLogo" alt="" />
          Logtime Redmine
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <div class="d-flex">
          <!-- --------tạo Cập nhật thời gian ---------- -->
          <div class="parent pr-3">
            <router-link to="/update-time-logtime">
              <span class="buttonHover">
                <button
                  class="btnLogout btn  w-md waves-effect waves-light bg-light"
                  style="font-size: 13px"
                  type="submit"
                >
                  <b-icon style="" icon="clock-history"></b-icon>
                </button>
              </span>
              <div class="child">
                <button
                  class="btnLogout btn  w-md waves-effect waves-light bg-light"
                  style="font-size: 13px"
                  type="submit"
                >
                  <b-icon style="" icon="clock-history"></b-icon> Cập nhật thời
                  gian
                </button>
              </div>
            </router-link>
          </div>
          <!-- ---------end Cập nhật------- -->
          <!-- --------tạo tài khoản---------- -->
          <div class="parent pr-3">
            <router-link to="/create-account">
              <span class="buttonHover">
                <button
                  class="btnLogout btn  w-md waves-effect waves-light bg-light"
                  style="font-size: 13px"
                  type="submit"
                >
                  <b-icon style="" icon="plus-square"></b-icon>
                </button>
              </span>
              <div class="child">
                <button
                  class="btnLogout btn  w-md waves-effect waves-light bg-light"
                  style="font-size: 13px"
                  type="submit"
                >
                  <b-icon style="" icon="plus-square"></b-icon> Tạo tài khoản
                </button>
              </div>
            </router-link>
          </div>
          <!-- ---------end tạo tk------- -->
          <!-- --------tạo Thêm email ---------- -->
          <div class="parent pr-3">
            <router-link to="/add-email">
              <span class="buttonHover">
                <button
                  class="btnLogout btn  w-md waves-effect waves-light bg-light"
                  style="font-size: 13px"
                  type="submit"
                >
                  <b-icon style="" icon="plus-circle"></b-icon>
                </button>
              </span>
              <div class="child">
                <button
                  class="btnLogout btn  w-md waves-effect waves-light bg-light"
                  style="font-size: 13px"
                  type="submit"
                >
                  <b-icon style="" icon="plus-circle"></b-icon> Thêm email nhận
                  thông báo
                </button>
              </div>
            </router-link>
          </div>
          <!-- ---------end Thêm email------- -->
          </div>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <div class="d-flex" right>
              <div class="">
                <div>
                  <b-dropdown right text="" variant="none" no-caret>
                    <template #button-content>
                      <div class="userMenu">
                        <img
                          class="rounded-circle header-profile-user"
                          style=""
                          src="../assets/images/users/avatar-dev.jpg"
                          alt="Header Avatar"
                        />
                        <span class="pl-1">{{ username }}</span>
                        <b-icon
                          icon="chevron-double-down"
                          class="iconUserMenu"
                        ></b-icon>
                      </div>
                    </template>
                    <b-dropdown-item>
                      <b-button variant="outline-success"
                      @click="changePassword"
                        ><b-icon style="" icon="key"></b-icon> Đổi mật
                        khẩu
                        </b-button>
                      <hr />
                      <b-button
                        @click="logout"
                        variant="outline-danger"
                        style="width: 144px;"
                        type="submit"
                      >
                        <b-icon style="" icon="power"></b-icon> Đăng xuất
                      </b-button>
                    </b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <!-- -----------modal change pass ------- -->
    <b-modal
        v-model="showModalChangePass"
        hide-header
        hide-footer
        no-close-on-backdrop
      >
        <button
          type="button"
          aria-label="Close"
          class="close close-ext"
          @click="this.distroyModal"
        >
          ×
        </button>
        <div class="text-title-modal mb-3">Đổi mật khẩu</div>
        <div class="box-modal">
          
          <div class="mt-2">
            <div class="form-group">
                        <b-form-group label="" label-for="formrow-email-input">
                          <validation-provider
                            name="Mật khẩu cũ"
                            rules="lBetween:6,255|required"
                            v-slot="{ errors, valid }"
                          >
                            <label>Mật khẩu cũ</label>
                            <b-form-input
                              id="formrow-email-input"
                              type="password"
                              placeholder="******"
                              v-model="passwordOld"
                              :state="
                                errors[0]
                                  ? false
                                  : valid && passwordOld != ''
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
          <div class="mt-2">
            <div class="form-group">
                        <b-form-group label="" label-for="formrow-email-input">
                          <validation-provider
                            name="Mật khẩu mới"
                            rules="lBetween:6,255|required"
                            v-slot="{ errors, valid }"
                          >
                            <label>Mật khẩu mới</label>
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
          <div class="mt-2">
            <div class="form-group">
                        <b-form-group label="" label-for="formrow-email-input">
                          <validation-provider
                            name="Nhập lại mật khẩu"
                            rules="lBetween:6,255|required"
                            v-slot="{ errors, valid }"
                          >
                            <label>Nhập lại mật khẩu</label>
                            <b-form-input
                              id="formrow-email-input"
                              type="password"
                              placeholder="******"
                              v-model="passwordNew"
                              :state="
                                errors[0]
                                  ? false
                                  : valid && passwordNew != ''
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
        <div class="mt-2 text-right">
          <b-button @click="distroyModal" class="btn btn-white color-default"
            >Hủy</b-button
          >
          <b-button
            class="btn btn-primary btn-primary-ext"
            >Hoàn tất</b-button
          >
        </div>
      </b-modal>
  </div>
</template>

<script>
import { UserService } from "@/services/user.service.js";
// import Swal from "sweetalert2";
export default {
  name: "navbar",
  data() {
    return {
      username: localStorage.getItem("username"),
      location: window.location.pathname,
      showModalChangePass : false,
      passwordOld:"",
      password:"",
      passwordNew:""
    };
  },
  methods: {
    logout() {
      const response = UserService.logout(this.token);
      if (response) {
        this.$router.push({ path: "/" });
      }
    },
    changePassword(){
      this.showModalChangePass = true
    },
    distroyModal(){
      this.showModalChangePass = false
    }
  },
};
</script>

<style scoped>
.recover {
  background-color: #fff;
  padding: 0px;
  margin: 0px;
  font-size: 13px;
}
.btnRecover {
  color: white !important;
}
.btnLogout {
  color: #dc3545;
}
.btnLogout:hover {
  background-color: #a52a2a !important;
  color: #fff;
}

.btnRecover:hover {
  background-color: #a52a2a !important;
}
.userMenu:hover {
  color: #fffacd !important;
}
.userMenu {
  color: #fff !important;
}
.iconUserMenu {
  padding-left: 3px;
  font-size: 16px !important;
}
.imageLogo {
  height: 30px;
}
.child {
  display: none;
  transition: 2s;
}
.parent:hover .child {
  display: block;
  transition: 2s;
}
.parent:hover .buttonHover {
  display: none;
  transition: 2s;
}
.swal2-popup{
width: 3060px !important;
}
</style>
