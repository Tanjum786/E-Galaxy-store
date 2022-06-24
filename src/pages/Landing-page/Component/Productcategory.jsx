import { NavLink } from "react-router-dom";
import { useFilter } from "../../../Context";


const Productcategory = ({ productImage, categoryName }) => {
  const {filterState, filterDispatch}=useFilter();

  const categoryHandler=((categoryName)=>{
    if (categoryName==="Men's wear") {
      filterDispatch({type:"CLEAR_CATEGORY"})
      filterDispatch({type:"MEN",payload:categoryName})
    
      
    }
    else if (categoryName==="Women's wear") {
      filterDispatch({type:"CLEAR_CATEGORY"})
      filterDispatch({type:"WOMEN",payload:categoryName})

  }
  else if (categoryName==="Kid's wear") {
    filterDispatch({type:"CLEAR_CATEGORY"})
    filterDispatch({type:"KIDS",payload:categoryName})
  }})

  return (
    <>
    <NavLink to={'/product'} onClick={()=>categoryHandler(categoryName)}>
      <div className="card_container">
        <img src={productImage} alt="category-image" />
        <p className="card_overlay padding_small">{categoryName}</p>
      </div>
      </NavLink>
    </>
  );
};

export { Productcategory };
