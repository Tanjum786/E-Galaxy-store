export const Sortprice = (product,{sortby}) => {
    if (sortby==="HIGH-TO-LOW") {
        return ([...product].sort((a,b)=>b.price-a.price))
        
    }else if (sortby==="LOW-TO-HIGH") {
        return ([...product].sort((a,b)=>a.price-b.price))
        
    }
    return product
}
