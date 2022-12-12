export const loader = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("cart loader resolved");
      resolve('cart');
    }, 1000);
  });
};
