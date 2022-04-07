export const RangeFun = (product,{PriceValue}) => {
    if (PriceValue) {
        console.log(PriceValue);
        // console.log(product.filter((items)=>items.price<=PriceValue));
        return product.filter((items)=>items.price<=PriceValue)
    }
    return product 
}
