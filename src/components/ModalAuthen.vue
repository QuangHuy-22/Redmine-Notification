<template>
    <div>
    <b-modal id="authen" hide-footer hide-header>
        <b-col class="iconLogout mb-2">
        <b-icon
            icon="exclamation-triangle"
            class="iconsBox"
            style="color: red!important;"
        ></b-icon>
        </b-col>
        <div class="d-block text-center">
        <span
        >
            Tài khoản của bạn đang được đăng nhập ở thiết bị khác
        </span>
        <h5 style="display: block;word-break: break-word;">Vui lòng đăng nhập lại</h5>
        </div>
        <div class="buttonSubmitLogout">
            <router-link to="/login">
        <button
            class="buttonOK mt-3"
            style="font-size: 13px;"
        >
            OK
        </button>
        </router-link>
        </div>
    </b-modal>
    </div>
</template>

<script>
export default {
    name: "authen",
};
</script>

<style></style>
