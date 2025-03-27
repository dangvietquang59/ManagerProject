import Cookies from "js-cookie";

import variables from "@/utils/constants/variables";
import paths from "@/utils/constants/paths";
import isTokenExpired from "@/utils/functions/isTokenExpired";

type FetchMethod = "GET" | "POST" | "PUT" | "DELETE";

interface FetchOptions {
  endpoint: string;
  token?: string | null;
  method?: FetchMethod;
  body?: string | FormData | object | null;
  isSearch?: boolean;
  additionalHeaders?: Record<string, string>;
}

export const fetchData = async <T>({
  endpoint,
  token,
  method = "GET",
  body,
  isSearch = false,
  additionalHeaders = {},
}: FetchOptions): Promise<{ status: number; data: T | null }> => {
  try {
    const headers: Record<string, string> = {};

    if (token) {
      if (isTokenExpired(token)) {
        Cookies.remove(variables.ACCESS_TOKEN);
        Cookies.remove(variables.PROFILE);

        if (typeof window !== "undefined") {
          window.location.href = paths.HOME;
        }

        return { status: 401, data: null };
      }

      headers["Authorization"] = `Bearer ${token}`;
    }

    if (!(body instanceof FormData) && method !== "GET") {
      headers["Content-Type"] = "application/json";
    }

    Object.assign(headers, additionalHeaders);

    const config: RequestInit = { method, headers };

    if (body && method !== "GET") {
      config.body = body instanceof FormData ? body : JSON.stringify(body);
    }

    const apiUrl = isSearch
      ? process.env.NEXT_PUBLIC_SEARCH_API_URL ||
        process.env.NEXT_LOCAL_SEARCH_API_URL
      : process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_LOCAL_API_URL;

    if (!apiUrl) {
      return { status: 500, data: null };
    }

    if (!endpoint.startsWith("/")) {
      endpoint = `/${endpoint}`;
    }

    const response = await fetch(`${apiUrl}${endpoint}`, config);
    const status = response.status;

    let data: T | null = null;

    try {
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn("🚨 JSON parsing error:", error);
    }

    return { status, data };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("❌ Fetch Error:", error);

    return { status: 500, data: null }; // Luôn trả về data ngay cả khi lỗi
  }
};
