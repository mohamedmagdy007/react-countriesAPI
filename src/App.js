import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";

import Header from './components/header';
import Home from './components/home';
import Details from './components/details';

function App() {
  return (
    <BrowserRouter>
          <Header/>
            <Route path='/' component={Home} exact></Route>
            <Route path='/details/:id' component={Details}></Route>
       </BrowserRouter>
  );
}

export default App;
