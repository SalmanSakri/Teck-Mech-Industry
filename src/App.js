import React from 'react'

import Footer from "./component/Footer"
import Landindpage from './component/LandingPage/Landindpage';
import Product from "./component/ProductPage/Product"
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Certification from './component/LandingPage/Certification';
import MultiSpringSeal from './component/ProductPage/MultiSpringSeal';
import PageNotFound from './component/PageNotFound';
function App() {

  return (
    <>
      <main>
       <BrowserRouter>
      
           <Routes> 
            <Route exact path="/" element={<Landindpage/>} />
            <Route exact path="/product" element={<Product/>} />
            <Route exact path="/certification" element={<Certification/>} />
            <Route exact path="/MultiSpringSeal" element={<MultiSpringSeal/>} />
            <Route exact path="*" element={<PageNotFound/>} />
          </Routes>
          <Footer />
         
          </BrowserRouter>
      </main>
    </>

  );
}

export default App;
