import axios from "axios";
import { BaseService } from "./base.service";
import fileDownload from "js-file-download";

const BASE_URL = process.env.VUE_APP_BASE_URL_RISK;
const BASE_TOKEN = process.env.VUE_APP_TOKEN_RISK;
const email = localStorage.getItem("email");

export class TransactionService extends BaseService {
    static async getList(params, body) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/risks/VIMO/search`,
                params: {
                    size: params.size,
                    page: params.page,
                },
                data: {
                    customerName: body.customerName,
                    dateFrom: body.dateFrom,
                    dateTo: body.dateTo,
                    nrmUsername: body.nrmUsername,
                    phoneNumber: body.phoneNumber,
                    riskType: body.riskType,
                    statusAction: body.statusAction,
                    transactionId: body.transactionId,
                    transactionType: body.transactionType,
                    typeOfApp: body.typeOfApp,
                },
                headers: {
                    Authorization: `Bearer ${BASE_TOKEN}`,
                },
            });
            return response;
        } catch (error) {
            return error.response;
        }
    }

    static async getDataSearch() {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/risks/VIMO/get-search-by/${email}`,
                headers: {
                    Authorization: `Bearer ${BASE_TOKEN}`,
                },
            });
            return response;
        } catch (error) {
            return error.response;
        }
    }
    static async getDataSearchTest(emailTest) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/risks/VIMO/get-search-by/${emailTest}`,
                headers: {
                    Authorization: `Bearer ${BASE_TOKEN}`,
                },
            });
            return response;
        } catch (error) {
            return error.response;
        }
    }

    static async getDetailByCode(code) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/risks/VIMO/transaction-code`,
                params: {
                    transactionCode: code,
                },
                headers: {
                    Authorization: `Bearer ${BASE_TOKEN}`,
                },
            });
            return response;
        } catch (error) {
            return error.response;
        }
    }

    static async setProcessed(username, code) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/risks/VIMO/set-processed`,
                params: {
                    nrmUsername: username,
                    transactionCode: code,
                },
                headers: {
                    Authorization: `Bearer ${BASE_TOKEN}`,
                },
            });
            return response;
        } catch (error) {
            return error.response;
        }
    }

    static async setProcessing(username, code) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/risks/VIMO/set-processing`,
                params: {
                    nrmUsername: username,
                    transactionCode: code,
                },
                headers: {
                    Authorization: `Bearer ${BASE_TOKEN}`,
                },
            });
            return response;
        } catch (error) {
            return error.response;
        }
    }

    static async transfer(code, body) {
        try {
            const response = await axios({
                method: "put",
                url: `${BASE_URL}/api/risks/VIMO/transfer`,
                params: {
                    transactionCode: code,
                },
                data: {
                    nrmUsername: body.nrmUsername,
                    reasonTransfer: body.reasonTransfer,
                },
                headers: {
                    Authorization: `Bearer ${BASE_TOKEN}`,
                },
            });
            return response;
        } catch (error) {
            return error.response;
        }
    }

    static async getListHome(emailHome) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/risks/VIMO/get-all-for-web/${emailHome}`,
                headers: {
                    Authorization: `Bearer ${BASE_TOKEN}`,
                },
            });
            return response;
        } catch (error) {
            return error.response;
        }
    }

    static async exportExcel(data) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/risks/VIMO/export-excel`,
                data: data,
                responseType: "blob",
                headers: {
                    Authorization: `Bearer ${BASE_TOKEN}`,
                },
            });
            fileDownload(response.data, "TransactionRisk.xlsx");
            return response;
        } catch (error) {
            return error.response;
        }
    }
}