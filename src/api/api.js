import axios from "axios";

export const postRegister = async (data) => {
  try {
    const response = await axios.post(
      "https://port-0-kikidy12-bbangeobung-backend-108dypx2aldzyvyjq.sel3.cloudtype.app/api/user/signup",
      data
    );
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

export const postLogin = async (data) => {
  try {
    const response = await axios.post(
      "https://port-0-kikidy12-bbangeobung-backend-108dypx2aldzyvyjq.sel3.cloudtype.app/api/user/login",
      data
    );
    localStorage.setItem("accessToken", response.headers.authorization);
  } catch (e) {
    console.log(e);
  }
};

export const showStore = async () => {
  try {
    const response = await axios.get(
      "https://port-0-kikidy12-bbangeobung-backend-108dypx2aldzyvyjq.sel3.cloudtype.app/api/store/"
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};
