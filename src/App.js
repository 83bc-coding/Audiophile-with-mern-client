import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Login from './components/page/login'
import Home from "./components/Home";
import "./App.css";
import ResponsiveAppBar from "./components/NavbarSimple";
import { Box } from "@mui/material";
import Shope from "./components/shope";
import Card from ".//components/Card";
import Footer from ".//components/footer";
import Category from ".//components/Category";
import CheckOut from "./components/page/CheckOut";

import Register from "./components/page/register";
import SeeProduct from "./components/seeProduct";
import Product from "./components/product";
import { useEffect, useState } from "react";
import SelectPlanProvider from "./Hook/categoryState";
import Men from "./components/men";
import ScrollToTop from "./app/store";
import Store from "./components/store";
import Suc from "./components/page/Suc";
  function App() {
 
  
   return (
     
     <SelectPlanProvider> 
       <div className="App">
        
      <BrowserRouter>
      <ResponsiveAppBar />
       
      <ScrollToTop/>

         <ResponsiveAppBar />
         <Routes>
 

        <Route path="/" element={ <Home/>}/>
        <Route path="/home" element={ <Home/>}/>
        
        <Route path="/checkout" element={ <CheckOut/>}/>
        <Route path="/success" element={ <Suc/>}/>

 
<Route path="/category/:name" element={  <>
 <Category/>
  
</>
} />

       
         <Route path="/product/:id" element={ <SeeProduct/>  
      
} />
         <Route path="/register" element={ <Register/>}/>
                   <Route path="/login" element={ <Login/>}/>
 

 
        </Routes>
        <Shope />
  <Card />
  <Men/>
         <Footer />
 
         </BrowserRouter>

 

      </div>
      </SelectPlanProvider>

  );
}

export default App;
