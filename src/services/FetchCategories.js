export const getCategories = async () => {
  return await fetch(
    "https://api.escuelajs.co/api/v1/categories"
  )
    .then((res) => res.json())
    .then((data) => data);
};
