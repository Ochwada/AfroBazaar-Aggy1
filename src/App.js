import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components/';



// ----------- ---- ---------------// 
// ------- Font Type -------------//  
const theme = createTheme({
  typography: {
    fontFamily: '"Lora", serif',
  },
});

// ------- useState -------------//  
const App = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);


  // ------- async func -------------//  
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const cart = await commerce.cart.add(productId, quantity);
    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const cart = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const cart = await commerce.cart.remove(productId);
    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const cart = await commerce.cart.empty();
    setCart(cart);
  }

  // ------- useEffect -------------//  
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // ------- Return -------------//  

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <Navbar totalItems={cart.total_items} />
          <Routes>
            <Route path="/" element={<Products products={products} onAddToCart={handleAddToCart} />} />
            <Route path="/cart" element={
              <Cart cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            } />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;