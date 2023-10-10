import React, { useState, useEffect } from 'react';

import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components/'



const App = () => {
  // ------- useState -------------//  
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);


// ------- async func -------------//  
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve() );
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  }


// ------- useEffect -------------//  
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  
  // ------- Return -------------//  

  return (
    <div>
      <Navbar totalItems={cart.total_items}/>
      {/* < Products products = {products} onAddToCart ={handleAddToCart}/> */}
      <Cart cart={cart}/>
    </div>
  );
}

export default App;