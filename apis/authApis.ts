import { fetchData } from "./fetchData";

import { LoginRequestType, LoginResponseType } from "@/types/loginType";
import { UserType } from "@/types/userType";
import urls from "@/utils/constants/urls";

const authApi = {
  async login(body: LoginRequestType) {
    try {
      const response = await fetchData<LoginResponseType>({
        endpoint: urls.LOGIN,
        method: "POST",
        body,
      });

      return response;
    } catch (error) {
      return { status: 500, data: null, error: error || "Unknown error" };
    }
  },
  async getMe(token: string) {
    try {
      const response = await fetchData<UserType>({
        endpoint: urls.ME,
        method: "GET",
        token,
      });

      return response;
    } catch (error) {
      return { status: 500, data: null, error: error || "Unknown error" };
    }
  },
};

export default authApi;
