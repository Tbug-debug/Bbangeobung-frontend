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
    alert(
      response.data.code === 200 ? "붕어빵 생겼붕어!" : response.data.message
    );
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
    alert(
      response.data.code === 200
        ? "붕어빵 먹어치웠붕어!"
        : response.data.message
    );
  } catch (e) {
    alert(
      e.response.data.code === 400
        ? "이 붕어빵 본인꺼 맞붕어?"
        : e.response.data.message
    );
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
    return response.data.data.comment;
  } catch (e) {
    alert(
      e.response.data.code === 400
        ? "리뷰에 문제가 생겼붕어"
        : e.response.data.message
    );
  }
};

export const showComment = async (storeId) => {
  try {
    const response = await axios.get(
      `https://port-0-kikidy12-bbangeobung-backend-108dypx2aldzyvyjq.sel3.cloudtype.app/api/comment/?storeId=${storeId}`
    );
    return response?.data.data;
  } catch (e) {
    console.log("showComment error", e);
  }
};

export const postReport = async ({ token, storeId, reason }) => {
  try {
    const response = await axios.post(
      `https://port-0-kikidy12-bbangeobung-backend-108dypx2aldzyvyjq.sel3.cloudtype.app/api/report/store/${storeId}`,
      reason,
      {
        headers: {
          Authorization: token,
          "Content-Type": "Application/json",
        },
      }
    );
    console.log(response);
  } catch (e) {
    console.log("postReport error", e);
  }
};
