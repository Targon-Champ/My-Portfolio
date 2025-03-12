import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <div className="w-full flex flex-col min-h-screen">
      <Navbar/>
      <Home/>
      <Footer/>

    </div>
    </>
  );
};

export default App;
