export const getAllProducts = async () => {
  return await fetch(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=10"
  )
    .then((res) => res.json())
    .then((data) => data);
};
