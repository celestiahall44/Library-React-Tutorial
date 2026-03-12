import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Books from './components/pages/Books';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={Books} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;