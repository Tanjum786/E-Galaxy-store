export const RatingFun = (product,{Rating}) => {
    if (Rating==="Four") {
        return product.filter((items)=>items.rating >= 4)
    }else if (Rating==="Three") {
        return product.filter((items)=> items.rating >= 3)
        
    }else if (Rating==="Two") {
        return product.filter((items)=>items.rating >= 2)
        
    }else if (Rating==="One") {
        return product.filter((items)=>items.rating >= 1)
    }
    return product
};
