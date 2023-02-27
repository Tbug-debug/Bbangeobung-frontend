import axios from "axios";
import HandleToken from "../util/HandleToken";

export const postRegister = async (data) => {
  try {
    const response = await axios.post(
      "https://port-0-kikidy12-bbangeobung-backend-108dypx2aldzyvyjq.sel3.cloudtype.app/api/user/signup",
      data
    );
    alert(response.data.message);
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const postLogin = async (data) => {
  try {
    const response = await axios.post(
      "https://port-0-kikidy12-bbangeobung-backend-108dypx2aldzyvyjq.sel3.cloudtype.app/api/user/login",
      data
    );

    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        id: `${response.data.data.id}`,
        userName: `${response.data.data.username}`,
        userEmail: `${response.data.data.email}`,
      })
    );

    HandleToken(response.headers.authorization);
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const showStore = async (category) => {
  try {
    const response = await axios.get(
      `https://port-0-kikidy12-bbangeobung-backend-108dypx2aldzyvyjq.sel3.cloudtype.app/api/v2/store/?itemName=${category}`
    );
    return response;
  } catch (e) {
    console.log("showStore", e);
  }
};

export const showDetailStore = async ({ id, token }) => {
  try {
    const response = await axios.get(
      `https://port-0-kikidy12-bbangeobung-backend-108dypx2aldzyvyjq.sel3.cloudtype.app/api/v2/store/${id}`,
      {
        headers: { Authorization: token },
      }
    );
    return response.data.data;
  } catch (e) {
    console.log("showDetailStore", e);
  }
};

export const postStore = async ({ token, data }) => {
  try {
    const response = await axios.post(
      "https://port-0-kikidy12-bbangeobung-backend-108dypx2aldzyvyjq.sel3.cloudtype.app/api/v2/store/",
      data,
      {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    alert(response.data.message);
  } catch (e) {
    console.log("postStore", e);
  }
};

export const deleteStore = async ({ token, id }) => {
  try {
    const response = await axios.delete(
      `https://port-0-kikidy12-bbangeobung-backend-108dypx2aldzyvyjq.sel3.cloudtype.app/api/store/${id}`,
      {
        headers: {
          Authorization: token,
          "Content-Type": "Application/json",
        },
      }
    );
    alert(response.data.message);
  } catch (e) {
    console.log("deleteStore", e);
  }
};

export const postComment = async ({ token, commentInfo }) => {
  try {
    const response = await axios.post(
      `https://port-0-kikidy12-bbangeobung-backend-108dypx2aldzyvyjq.sel3.cloudtype.app/api/comment/`,
      commentInfo,
      {
        headers: {
          Authorization: token,
          "Content-Type": "Application/json",
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log("postComment error", e);
  }
};

export const showComment = async (storeId) => {
  try {
    const response = await axios.get(
      `https://port-0-kikidy12-bbangeobung-backend-108dypx2aldzyvyjq.sel3.cloudtype.app/api/comment/?storeId=${storeId}`
    );
    return response;
  } catch (e) {
    console.log("showComment error", e);
  }
};
