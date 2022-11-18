export const getSingleProduct = async (productId) => {
  return await fetch(
    `https://api.escuelajs.co/api/v1/products/${productId}`
  )
    .then((res) => res.json())
    .then((data) => data);
};
