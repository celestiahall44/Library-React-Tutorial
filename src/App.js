import React from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Highlights from './components/Highlights';
import Highlight from './components/ui/Highlight';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
    </div>
  );
}

export default App;
