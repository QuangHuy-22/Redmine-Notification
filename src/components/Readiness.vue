<template>
<div>
    <div v-if="statusRisk && statusUser && statusNotify == 'OK'">OK</div>
</div>
</template>

<script>
import axios from "axios";
export default {
name:'liveness',
data(){
    return{
        statusRisk:"",
        statusUser:"",
        statusNotify:"",
    }
},
methods:{
    Risk(){
        axios.get('https://nrm-risk-dev-risk.nextpay.vn/actuator/health/readiness')
        .then((response)=>{
            if (response.status == 200) {
                this.statusRisk = "OK"
            }
        })
        .catch((error)=>{
            return error
        })
        
    },
    User(){
        axios.get('https://nrm-user-dev-risk.nextpay.vn/actuator/health/liveness')
        .then((response)=>{
                if (response.status == 200) {
                this.statusUser = "OK"
            }
        })
        .catch((error)=>{
            return error
        })
    },
    Notify(){
        axios.get('https://nrm-notify-dev-risk.nextpay.vn/actuator/health/liveness')
        .then((response)=>{
            if (response.status == 200) {
                this.statusNotify = "OK"
            }
        })
        .catch((error)=>{
            return error
        })
    },
},
mounted(){
this.Risk()
this.User()
this.Notify()
}
}
</script>

<style>

</style>