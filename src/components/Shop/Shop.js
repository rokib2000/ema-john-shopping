import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Product from "../Product/Product";
import Cart from '../Cart/Cart';
import "./Shop.css";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);



  useEffect( () =>{
    const storedCart = getStoredCart();
    const savedCart = [];
    for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    setCart(savedCart);
}, [products])

  const handleAddToCart = (selectProduct) => {
    // console.log(product);
        let newCart = [];
        const exists = cart.find(product => product.id === selectProduct.id);
        if(!exists){
          selectProduct.quantity = 1;
            newCart = [...cart, selectProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectProduct.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
