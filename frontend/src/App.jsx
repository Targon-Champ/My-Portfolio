import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ComingSoon from "./pages/ComingSoon";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="w-full flex flex-col min-h-screen">
        <section className="flex flex-row w-full">

          <section className="flex flex-col w-full min-h-screen bg-[#252323]">
            <Navbar />
            <Home />
            {/* <Routes>
              <Route
                path="/"
                element={
                  <div className="flex-1 items-center h-screen">
                    <Home />
                  </div>
                }
              ></Route>
              <Route
                path="/*"
                element={
                  <div className="flex-1">
                    <ComingSoon />
                  </div>
                }
              ></Route>
            </Routes> */}
          </section>
        </section>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
