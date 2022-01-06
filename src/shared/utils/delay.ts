export const delay = async (timeout = 2000) =>
  new Promise((resolve) => setTimeout(resolve, timeout));
