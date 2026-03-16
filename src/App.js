import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Books from './components/pages/Books';
import Bookinfo from './components/pages/Bookinfo';
import Cart from './components/pages/Cart';

function App() {
  const [cart,setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book]);
  }
  
  useEffect(() => {
    console.log(cart);
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books"  exact element={<Books />} />
          <Route path="/books/:id" element={<Bookinfo addToCart={addToCart} cart={cart} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;