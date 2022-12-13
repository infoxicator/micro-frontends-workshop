export const loader = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("products loader resolved");
      resolve('products');
    }, 1000);
  });
};
