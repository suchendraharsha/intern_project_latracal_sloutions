import React from 'react'
import {useParams,useNavigate} from "react-router-dom";
import { productsData } from './productData';
import './SingleProductPage.css';
import { FaArrowLeft } from "react-icons/fa6";
const SingleProductPage = () => {
    const {id} = useParams();
    console.log(id);
    const foundProduct = productsData.find((product) => product.id.toString() === id);
    console.log(foundProduct);
    const navigate = useNavigate();

    
    

  return (
    <div className='SingleProduct'>
      <div className='backArrow' onClick={()=>navigate('/')}><FaArrowLeft /></div>
    <div class="card">
    <div class="left">
      <img src={foundProduct.image} alt="shoe"/>
      <i class="fa fa-long-arrow-left"></i>
      <i class="fa fa-long-arrow-right"></i>
    </div>
    <div class="right">
      <div class="product-info">
        <div class="product-name">
          <h1>{foundProduct.name}</h1>
        </div>
        <div class="details">
          <h3>{foundProduct.description}</h3>
          <h2>{foundProduct.details}</h2>
          <h4> Price: Rs.{foundProduct.price}</h4>
          {/* <h4><span class="fa fa-dollar"></span>150</h4>
          <h4 class="dis"><span class="fa fa-dollar"></span>200</h4> */}
        </div>
        <ul>
          <li>SIZE</li>
          <li class="bg">{foundProduct.size[0]}</li>
          <li class="bg">{foundProduct.size[1]}</li>
          <li class="bg">{foundProduct.size[2]}</li>
          <li class="bg">{foundProduct.size[3]}</li>
          {/* <li class="bg">{foundProduct.size[0]}</li> */}
        </ul>
        <ul>
          <li>COLOR</li>
          <li class="yellow" style={{ backgroundColor: foundProduct.color[0] }}></li>
          <li class="black" style={{ backgroundColor: foundProduct.color[1] }}></li>
          <li class="blue" style={{ backgroundColor: foundProduct.color[2] }}></li>
        </ul>
        <span class="foot"><i class="fa fa-shopping-bag"></i>Buy Now</span>
        <span class="foot"><i class="fa fa-shopping-cart"></i>Add TO Cart</span>
      </div>
    </div>
  </div>
  </div>

  )
}

export default SingleProductPage