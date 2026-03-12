import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/books" component={Books} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;