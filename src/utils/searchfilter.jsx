export const searchfilter = (products, searchQurey) => {
  if (searchQurey === "") {
    return products;
  }
  return products.filter((product) =>
    product.title.toLowerCase().includes(searchQurey.toLowerCase())
  );
};
