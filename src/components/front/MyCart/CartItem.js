import React from 'react'
import './CartItem.css'

const MyCart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleClearMyCart }) => {

  const totalPrice = cartItems.reduce((price, item)=> price+item.quantity* item.price,0 );

  return (
    <div className='cart_items'>
      <h2 className='cart_items-header'>MyCart Items</h2>

      <div className='clear-Cart'>
        {cartItems.length >= 1 && (<button size="12" className='clear_cart-button' onClick={handleClearMyCart}>ClearCart</button>)}
      </div>

      {
        cartItems.length === 0 && (
          <div>
            No Items are Added in MyCart
          </div>
        )
      }

      <div>
        {
          cartItems.map(
            (item) => (
              <div key={item.id} className='cart_items-list'>
                <img className='cart_items-image' src={item.image} alt={item.name} />

                <div className='cart_items-name'>
                  {item.name}
                </div>

                <div className='cart_items-function'>
                  <button className='cart_items-add' onClick={()=> handleAddProduct(item)}>+</button>
                  <button className='cart_items-remove' onClick={()=> handleRemoveProduct(item)}>-</button>
                </div>

                <div className='cart_items-price'>
                  {item.quantity}* ${item.price}
                </div>
              </div>
            )
          )
        }
      </div>
      <div className='cart_items-header'>
        Total Price :
        <div>
          ${totalPrice}
        </div>
      </div>

    </div>
  )
}

export default MyCart