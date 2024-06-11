/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './CheckoutPage.scss';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedItems) {
      setCartItems(savedItems);
    }
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleAddQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleSubtractQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity -= 1;
    if (updatedCartItems[index].quantity === 0) {
      updatedCartItems.splice(index, 1);
    }
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-items">
        {cartItems.map((item, index) => (
          <div key={index} className="checkout-item">
            <div><img src="https://img.freepik.com/vetores-gratis/conjunto-de-icones-plana-de-doces-e-bolos_74855-5939.jpg" alt="" /></div>
            {/* <div><img src={item.imageUrl} alt={item.title} /></div> */}
            <div>{item.title}</div>
            <div>{item.price}</div>
            <div className="item-count-controls"> 
              <button className="item-count-button" onClick={() => handleSubtractQuantity(index)}>-</button>
              <div className="item-count-display">{item.quantity}</div>
              <button className="item-count-button" onClick={() => handleAddQuantity(index)}>+</button>
            </div>
            <button className="item-removed-button"  onClick={() => handleRemoveItem(index)}>Remover</button>
          </div>
        ))}
      </div>
      {cartItems.length === 0 && <p>Carrinho vazio</p>}
    </div>
  );
};

export default CheckoutPage;


