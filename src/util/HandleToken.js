const HandleToken = (token) => {
  const expires = new Date(Date.now() + 10 * 60 * 1000); // 10분후
  document.cookie = `access_token=${token}; expires=${expires}; path=/`;
};

export default HandleToken;
