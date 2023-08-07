
import React from "react";
import { Routes, Route } from "react-router-dom";
import Api from "../pages/Api";
import Home from "../pages/Home";
import Form from "../pages/Form";
import Login from "../pages/Login";
import Showhide from "../pages/Showhide";
import Apitable from "../pages/Apitable";
import Sortdata from "../pages/Sortdata";
import Navbar from "../Navbar";
import Pagination from "../pages/Pagination";
import Design from "../pages/Design"
import Fileupload from "../pages/Fileupload";

import Create from "../components/Create";
import Update from "../components/Update";
import Read from "../pages/Read";

function Web() {


  return (
    <>
 <div className="background-container">
      
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/api" element={<Api />} />
          <Route path="/form" element={<Form />} />
          <Route path="/showhide" element={<Showhide />} />
          <Route path="/Apitable" element={<Apitable/>}/>
          <Route path="/Sortdata" element={<Sortdata/>}/>
          <Route path="/Pagination" element={<Pagination/>}/>
          <Route path="/Design" element={<Design/>}/>
          <Route path= "/Fileupload" element ={<Fileupload/>}/>
          
          <Route path= "/Create" element ={<Create/>}/>
          <Route path= "/Read" element ={<Read/>}/>
          <Route path= "/Update" element ={<Update/>}/>
        
        </Routes>
       
        </div>
    </>
    
  );
}
 
export default Web;