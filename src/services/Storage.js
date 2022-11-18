export const Storage = {
  fetch: () => {
    let cartList = JSON.parse(localStorage.getItem("YS_CART"));
    return cartList ? cartList : [];
  },
  save: (data) => {
    localStorage.setItem("YS_CART", JSON.stringify(data));
  },
};
