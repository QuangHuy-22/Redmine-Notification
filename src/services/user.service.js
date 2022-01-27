import { BaseService } from "./base.service";
import axios from "axios";
const BASE_URL = "https://logtime-redmine.herokuapp.com/account/v1";

export class UserService extends BaseService {
  static async loginRedmineLogtime(data) {
    try {
      const response = await axios.post(`${BASE_URL}/login`, data);
      return response;
    } catch (error) {
      return error.response;
    }
  }
  static async forgetPassword(data) {
    try {
      const response = await axios.post(`${BASE_URL}/forgot-password`, data);

      return response;
    } catch (error) {
      return error.response;
    }
  }
  static async logout(token) {
    try {
      const response = await axios({
        method: "post",
        url: `${BASE_URL}/logout`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  }
  static async updateTime(token, data) {
    try {
      const response = await axios({
        method: "post",
        url: `${BASE_URL}/4`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          timeWeekDto: data,
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  }
  static async createAccount(token, data){
    try {
      const response = await axios({
        method: "post",
        url: `${BASE_URL}/create-account`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data
      })
      return response
    } catch (error) {
      return error.response
    }
  }
  static async changePassword(token, data){
    try {
      const response = await axios({
        method: "post",
        url: `${BASE_URL}/change-password`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data
      })
      return response
    } catch (error) {
      return error.response
    }
  }
  static async addEmail(token, data){
    try {
      const response = await axios({
        method: "post",
        url: `${BASE_URL}/create-user`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data
      })
      return response
    } catch (error) {
      return error.response
    }
  }
}
