export const RangeFun = (product,{PriceValue}) => {
    if (PriceValue) {
        return product.filter((items)=>items.price<=PriceValue)
    }
    return product 
}
