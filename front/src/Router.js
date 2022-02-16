import { Routes, Route,BrowserRouter } from "react-router-dom" ;
import React from "react";
import App from "../App";
import Show from "../views/Show";
import Landing from "../views/Landing";


function Router() {
    return (
    <BrowserRouter> 
      <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/show/:id" element={<Showproduct />} />
      </Routes> 
    </BrowserRouter>
)
}
export default Router; 