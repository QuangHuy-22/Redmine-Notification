<template>
<div>
<footer class="footer" style=" color: #74788d;background-color: #f2f2f5;">
    <div class="container-fluid">
    <div class="row">
        <div class="col-sm-6">{{ new Date().getFullYear() }} © Risk.</div>
        <div class="col-sm-6">
        <div class="text-sm-right d-none d-sm-block">
            Design & Develop by Nextpay
        </div>
        </div>
    </div>
    </div>
</footer>
<!-- ---------upload file------- -->
<!-- <div class="avatar-wrapper">
<img class="profile-pic" :src="avatar.base64URL" />
<div class="upload-button">
    <b-icon icon="images" aria-hidden="true"></b-icon>
</div>
<input v-on:change="uploadAvatar" class="file-upload" type="file"  placeholder="Ảnh đại diện "/>
</div> -->

<!-- --------end upload file image----------- -->
<Loading
    :active="loading.isLoading"
    :can-cancel="true"
    :is-full-page="loading.fullPage"
>
</Loading>
</div>
</template>

<script>
export default {
name: "footer-content",
components: {
},
data() {
return {
    value: "",
    data: "",
    mounthdata: "",
    loading: {
    isLoading: false,
    fullPage: true,
    },
    avatar: {
    objFile: null,
    base64URL: "",
    },
    key: "",
    dataAppType: [],
    dataTransactionType: [],
    BASE_TOKEN: process.env.VUE_APP_TOKEN_RISK,
};
},
methods: {
    }

// uploadAvatar(e){
//     if (e.target.files && e.target.files.length) {
//         var fileAvatar = e.target.files[0]
//         console.log(fileAvatar);
//     }
//     let reader = new FileReader();

//     reader.addEventListener("load",  () => {
//     // convert image file to base64 string
//     let previewSrc = reader.result;
//     console.log("Preview = ", previewSrc);
//     this.avatar.base64URL = previewSrc
//     }, false);

//     if (fileAvatar) {
//     reader.readAsDataURL(fileAvatar);
//     }
// }
};
</script>

<style>
.buttonOK {
font-size: 13px;
width: 100px;
}
/* img{
width: 300px;
height: 300px;
} */
</style>
