<template>
<div>
<div class="row">
<div class="col-lg-12">
    <div class="card">
        <div class="card-body" style="padding: 8px!important;">
            <h4 class="card-title mb-4"></h4>
            <div class="table-responsive">
                <table class="table table-centered table-nowrap mb-0">
                    <thead class="thead-light">
                        <tr style="font-size: 12px;white-space: nowrap;">
                            <th>STT</th>
                            <th>Thời gian</th>
                            <th>App</th>
                            <th>Giao dịch</th>
                            <th >Mã Giao Dịch</th>
                            <th>Khách Hàng</th>
                            <th>Số tiền</th>
                            <th>Loại Rủi Ro</th>
                            <th>Trạng thái</th>
                            <th>Người xử lý</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody v-for="(dataTrans, indexObj) in dataNew"  :key="dataTrans.id">
                        <tr style="font-size: 12px;">
                            <td>{{indexObj + 1}}</td>
                            <td>
                                <span>{{ dataTrans.transactionTime.substring(11,19)}}</span>
                                <span style="display: block;">{{ dataTrans.transactionTime.substring(0,10).split("-").reverse().join("/")}}</span>
                            </td>
                            <td>Vimo</td>
                            <td>{{dataTrans.methodName}}</td>
                            <td>
                                {{dataTrans.transactionCode}}
                            </td>
                            <td>
                                <span>Tên : {{dataTrans.customerName}}</span>
                                <span style="display: block;">SĐT : {{dataTrans.customerIdf}}</span>
                            </td>
                            <td>
                                {{dataTrans.amount.toLocaleString('vi-VN', {style: 'currency',currency: 'VND'}) }}
                            </td>
                            <td >
                                <span  class="rules" v-for="dataRules in dataTrans.rulesDescription" :key="dataRules">{{dataRules}}</span>
                                
                            </td>
                            <td>
                                <span 
                                :class='dataTrans.statusAction == "NEW" ? "badge badge-pill badge-soft-primary" : 
                                dataTrans.statusAction == "DONE" ? "badge badge-pill badge-soft-success" : dataTrans.statusAction == "PROCESSING" ? "badge badge-pill badge-soft-danger" :""   '>
                                {{ dataTrans.statusAction == "NEW" ? "Chờ xử lý" : 
                                dataTrans.statusAction == "DONE" ? "Đã xử lý" : dataTrans.statusAction == "PROCESSING" ? "Đang xử lý" : "" }}
                                </span>
                            </td>
                            <td>
                                {{dataTrans.nrmUsername}}
                            </td>
                            <td >
                                <b-dropdown right text="" variant="none" class="three-dot" no-caret>
                                <template #button-content>
                                <b-icon icon="three-dots-vertical" style="font-size: 13px;" ></b-icon>
                                    </template>
                                    <div style="font-size: 13px;">
                                <b-dropdown-item @click="detail(dataTrans.transactionCode,dataTrans.statusAction)">
                                    Chi tiết
                                </b-dropdown-item>
                                <b-dropdown-item @click="setProcessing(dataTrans.transactionCode)" >
                                    Nhận giao dịch
                                    </b-dropdown-item>
                                <b-dropdown-item >
                                    Gán
                                    </b-dropdown-item>
                                </div>
                                </b-dropdown>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- end table-responsive -->
            <!-- <div class="overflow-auto">
            <b-pagination
            v-model="params.page"
            :total-rows="pagination.total"
            :per-page="params.size"
            first-text="First"
            prev-text="Previous"
            next-text="Next"
            last-text="Last"
            class="pagination mt-4"
            ></b-pagination>
        </div> -->
        </div>
    </div>
</div>
</div>
<all-model-risk />
</div>
</template>

<script>
import axios from 'axios'
import AllModelRisk from "../Tables/AllModelRisk.vue"
import { TransactionService } from "@/services/transaction.service";

export default {
    name:"risk-table",
    components:{
        AllModelRisk
    },
    data(){
        return{
        BASE_URL_RISK: this.$store.getters.BASE_URL_RISK,
        BASE_TOKEN_RISK: this.$store.getters.BASE_TOKEN_RISK,
        dataRisk:{},
        dataDone:{},
        dataNew:{},
        dataProcessing:{},
        totalNew:"",
        totalDone:"",
        totalProcessing:"",
        emailName: localStorage.getItem('email'),
        page: 1,
        count: 0,
        pageSize: 3,
        pageSizes: [3, 6, 9],
        rows: 100,
        perPage: 2,
        DATA_PERMISSION:localStorage.getItem('permission'),
        search: {
            page: 1,
            size: 10,
            roleName:''
        },
        pagination: {
            total: 20
        },
        }
    },
    methods:{
            async fetchData(){
                try{
                    const response = await TransactionService.getListHome(this.search)
                    if (response.status == 200) {
                    this.dataRisk = response.data[0]
                    this.dataNew = response.data[0].New.riskTransList
                        }
                }
    catch(error) {
        return error.response
    }    
        },

        setProcessing(transCode){
        if (this.DATA_PERMISSION.includes("PROCESSING_RISK")) {
            const headers = {
            "Content-Type": "application/json",
            "User-Agent": "Web",
            };
            axios({
                method:"post",
                url:`${this.BASE_URL_RISK}/api/risks/VIMO/set-processing`,
                headers: {
                headers: headers,
                Authorization: `Bearer ${this.BASE_TOKEN_RISK}`,
                },
                params:{
                    nrmUsername:this.emailName,
                    transactionCode: transCode
                }
            })
            .then((response)=>{
                if (response.status == 200) {
                this.$bvModal.show("bv-modal-example-change-new")
                // this.handlePageChange()
                window.location.reload()
                }
            })
            .catch((error)=>{
                alert(error.response)
            })
        }
        else this.$bvModal.show("bv-modal-example-error-permission")
        },
        detail(code){
        if (this.DATA_PERMISSION.includes("VIEW_DETAIL_TRAN")) {
            this.$router.push({ name:'Chi tiết giao dịch chờ xử lý', params:{ code: code }})
        }
        else this.$bvModal.show("bv-modal-example-error-permission")
        },
    },
    mounted(){
        this.fetchData()
    }
}
</script>

<style>

</style>