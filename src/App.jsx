import React from 'react';
import NyhedContextProvider from './context/NyhedContext';
import Navbar from './components/Navbar';
import Nyheder from './components/Nyheder';
import OpretNyhed from './components/OpretNyhed';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <NyhedContextProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/" component={Home} exact />
          <Route path="/nyheder" component={Nyheder} />
          <Route path="/opretnyhed" component={OpretNyhed} />
        </div>
      </BrowserRouter>
    </NyhedContextProvider>
  );
}

export default App;
