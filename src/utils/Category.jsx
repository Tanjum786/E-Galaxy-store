export const Categoryfun = (product, {CatagoryMen, CatagoryWomen, CatagoryKids}) => {
    let allCategory = [];
  if (
    CatagoryMen === false &&
    CatagoryWomen === false &&
    CatagoryKids === false
  ) {
    allCategory = product;
  }
  if (CatagoryMen) {
    allCategory = allCategory.concat(
      product.filter((items) =>items.categoryName==="Men's wear")
    );
  }
  if (CatagoryWomen) {
    allCategory = allCategory.concat(
      product.filter((items) => items.categoryName==="women's wear" )
    );
  }
  if (CatagoryKids) {
    allCategory = allCategory.concat(
      product.filter((items) => items.categoryName==="Kid's wear")
    );
  }

  return allCategory;
};
