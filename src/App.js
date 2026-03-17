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
    setCart([...cart, {...book, quantity: 1}]);
  }
  
  function changeQuantity(book, quantity) {
    setCart(cart.map(item => 
      item.id === book.id
        ? {
          ...item,
          quantity: +quantity,
        }
        : item
      )
    );
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity;
    })
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books"  exact element={<Books />} />
          <Route path="/books/:id" element={<Bookinfo addToCart={addToCart} cart={cart} changeQuantity={changeQuantity} />} />
          <Route path="/cart" element={<Cart cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;