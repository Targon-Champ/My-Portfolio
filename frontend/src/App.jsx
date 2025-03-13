import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ComingSoon from "./pages/ComingSoon";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
    <div className="w-full flex flex-col min-h-screen">
      <Navbar/>
      <Routes>
        <Route path="/My-Portfolio" element={<div className="flex-1"><Home/></div>}></Route>
        <Route path="/My-Portfolio/*" element={<div className="flex-1"><ComingSoon/></div>}></Route>
      </Routes>
      
      <Footer/>

    </div>
    </Router>
  );
};

export default App;
