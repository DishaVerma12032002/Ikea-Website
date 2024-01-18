//import logo from './logo.svg';
import './App.css';
import { data } from './components/back/Data/data'
import Header from './components/front/Header/Header';
import Myroutes from './components/front/Routes/Routes';
import React, { useState } from 'react';

function App() {

  const { productItems } = data;
  const [cartItems, setMyCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) =>
      item.id === product.id
    );

    if (ProductExist) {
      setMyCartItems(
        cartItems.map(
          (item) =>
            item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity + 1 } : item
        )
      );
    }
    else {
      setMyCartItems(
        [...cartItems, { ...product, quantity: 1 }]
      );
    }

  }

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find(
      (item) => item.id === product.id
    );

    if (ProductExist.quantity === 1) {
      setMyCartItems(
        cartItems.filter(
          (item) =>
            item.id !== product.id
        )
      );
    }
    else {
      setMyCartItems(
        cartItems.map(
          (item)=>
                  item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity-1}:item
        )
      )
    }
  }

  const handleClearMyCart = () => {
    setMyCartItems([]);
   }
   
  return (
    <div className="App">
      <Header />
      <Myroutes
        productItems={productItems}
        handleAddProduct={handleAddProduct}
        cartItems={cartItems}
        handleRemoveProduct={handleRemoveProduct}
        handleClearMyCart={handleClearMyCart} />
    </div>
  );
}

export default App;
