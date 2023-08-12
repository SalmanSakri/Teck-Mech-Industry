import React from 'react'

import Footer from "./component/Footer"
import Landindpage from './component/LandingPage/Landindpage';
import Product from "./component/ProductPage/Product"
import { BrowserRouter as  Route, Routes, BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <>
      <main>
       <BrowserRouter>
       
           <Routes> 
            <Route exact path="/" element={<Landindpage/>} />
            <Route exact path="/product" element={<Product/>} />
            <Route exact path="*" element="404" />
          </Routes>

          <Footer />
          </BrowserRouter>
      </main>
    </>

  );
}

export default App;
