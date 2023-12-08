import React from 'react'
import Header from './Header';
import ProductPage from './ProductPage';
import { productsData } from './productData';

    const HomePage = () => {
        return (
          <div>
            <Header/>
            <div className='product_main'>
            {productsData.map((product) => (
              <ProductPage key={product.id} product={product} />
            ))}
            </div>
          </div>
        );
      };

export default HomePage