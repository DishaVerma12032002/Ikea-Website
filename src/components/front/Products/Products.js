// Products.js
import React from 'react';
import './Products.css';

const Products = ({ productItems, handleAddProduct }) => {
  return (
    <div className='products'>
      {productItems.map((productItem) => (
        <div className='card' key={productItem.id}>
          <div>
            <img className='product_image' src={productItem.image} alt={productItem.name} />
          </div>
          < div className='product_name'>
            <h3>{productItem.name}</h3>
          </div>
          <div className='product_price'>
            <h3>{productItem.price}</h3>
          </div>
          <div>
            <button className='btn btn-dark'
              onClick={() => {
                handleAddProduct(productItem);
              }}
            >
              Add to MyCart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
