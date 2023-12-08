import React, { useState } from 'react';
import {useNavigate,useParams} from "react-router-dom";
const ProductPage = ({product}) => {
    const params = useParams();
    const [showDetails, setShowDetails] = useState(false);
    const [showSingleProduct, setShowSingleProduct] = useState(false);
    const navigate = useNavigate();
  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const handleProductClick = () => {
    setShowSingleProduct(true);
    // Additional logic to handle showing the single product page, e.g., route change or modal display
  };
  if (showSingleProduct) {
    navigate(`/product/${product.id}`)
  }
  return (
    <div className='product_main_cont' onClick={handleProductClick}>
        <div className='product_main_container'>
            <div className='product_main_container2'>
        <div className='product_image_div'>
            <img src={product.image} alt="" className='product_image'></img>
        </div>
        </div>
        <div className='product_des_container'>
      <h2 className='product_name'>{product.name}</h2>
      <p className='product_description'>{product.description}</p>
      <p className='product_price'>Price: Rs.{product.price}</p>
     
      </div>
      </div>
      {/* <button onClick={handleToggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div>
          <p>{product.details}</p>
          
        </div>
      )}
      <hr /> */}
    </div>
  );

}

export default ProductPage