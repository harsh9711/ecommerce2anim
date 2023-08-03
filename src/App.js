import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './About'
import Products from './Components/Products'
import SingleProduct from './SingleProduct'; 
import Contact from './Components/Contact'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Errorpage from "./Errorpage";


const App = () => {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}  />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path ="/singleProduct/:id" element={<SingleProduct/>}/>
          {/* <Route path="/product" element={<Products/>}/> */}
          <Route path ="*" element={<Errorpage/>}/>
        </Routes> 
      </Router>
    </>
  );
};

export default App
