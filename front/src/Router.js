import { Routes, Route,BrowserRouter } from "react-router-dom" ;
import React from "react";
import App from "../App";
import Showproduct from "../views/Showproduct";
import Landing from "../views/Landing";


function Router() {
    return (
    <BrowserRouter> 
      <Routes>
      <Route path="/" element={<AllCategories/>} />
      <Route path="/show/:id" element={<Showproduct/>} />
      </Routes> 
    </BrowserRouter>
)
}
export default Router; 