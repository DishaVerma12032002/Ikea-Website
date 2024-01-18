import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Products from '../Products/Products'
import Signup from '../SignUp/Signup'
import MyCart from '../MyCart/CartItem'

const Myroutes = ({ productItems, handleAddProduct, cartItems, handleClearMyCart, handleRemoveProduct }) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />}></Route>

        <Route path='/signup' element={<Signup />}></Route>

        <Route path='/cart' element={<MyCart
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleClearMyCart={handleClearMyCart} />}>
        </Route>
      </Routes>
    </div>
  )
}

export default Myroutes