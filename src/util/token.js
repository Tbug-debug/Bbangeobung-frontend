import Cookies from "js-cookie";

const isLogin = () => !!Cookies.get("access_token");

export default isLogin;
