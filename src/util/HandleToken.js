const HandleToken = (token) => {
  document.cookie = `access_token=${token}; path=/`;
};

export default HandleToken;
