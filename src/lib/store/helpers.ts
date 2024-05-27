const getTokens = () => {
  const access = localStorage.getItem("access");

  return { access };
};

export { getTokens };
