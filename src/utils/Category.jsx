export const Categoryfun = (product, {CategoryMen, CategoryWomen, CategoryKids}) => {
    let allCategory = [];
  if (
    CategoryMen === false &&
    CategoryWomen === false &&
    CategoryKids === false
  ) {
    allCategory = product;
  }
  if (CategoryMen) {
    allCategory = allCategory.concat(
      product.filter((items) =>items.categoryName==="Men's wear")
    );
  }
  if (CategoryWomen) {
    allCategory = allCategory.concat(
      product.filter((items) => items.categoryName==="women's wear" )
    );
  }
  if (CategoryKids) {
    allCategory = allCategory.concat(
      product.filter((items) => items.categoryName==="Kid's wear")
    );
  }

  return allCategory;
};
