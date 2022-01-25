import { BaseService } from "./base.service";
import axios from "axios";
const BASE_URL = process.env.VUE_APP_BASE_URL_USER;
export class RoleService extends BaseService {
    static async getListAddUser(token) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/roles/search-role`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: {},
                params: {
                    page: 1,
                    size: 300
                }
            })
            return response;
        } catch (error) {
            return error.response
                // console.log(error);
        }

    }
    static async getList(token, data) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/roles/search-role`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: {
                    roleName: data.roleName
                },
                params: {
                    page: data.page,
                    size: data.size
                }
            })
            return response;
        } catch (error) {
            return error.response
                // console.log(error);
        }

    }

    static async deleteRole(roleId, token) {
        try {
            const response = await axios({
                method: "put",
                url: `${BASE_URL}/api/roles/delete/${roleId}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response;
        } catch (error) {
            return error.response
        }
    }
    static async getGroupPermisstion(token) {
        try {
            const response = await axios.get(`${BASE_URL}/api/group-permission`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response;
        } catch (error) {
            return error.response
        }
    }
    static async createRole(token, data) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/roles`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: data,
            });

            return response;
        } catch (error) {
            return error.response
        }
    }
    static async getDetailRole(token, codeRole) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/roles/${codeRole}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response;
        } catch (error) {
            return error.response
        }
    }
    static async getPermisstionOfRole(token, codeRole) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/roles/permission-in-group-role/${codeRole}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response;
        } catch (error) {
            return error.response
        }
    }
    static async getDataCheckbox(token) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/group-permission`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response;
        } catch (error) {
            return error.response
        }
    }
    static async assignRole(token, data, idUser) {
        try {
            const response = await axios({
                method: 'put',
                url: `${BASE_URL}/api/users/edit-user/${idUser}/change-role`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: data
            })
            return response
        } catch (error) {
            return error.response
        }
    }
}