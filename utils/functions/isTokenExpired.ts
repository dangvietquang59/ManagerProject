import { jwtDecode } from "jwt-decode";

type DecodedToken = {
  exp: number;
};

const isTokenExpired = (token: string | undefined): boolean => {
  if (!token) return true;

  try {
    const decoded: DecodedToken = jwtDecode(token);
    const now = Date.now() / 1000;

    return decoded.exp < now;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return true;
  }
};

export default isTokenExpired;
