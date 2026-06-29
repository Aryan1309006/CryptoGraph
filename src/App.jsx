import React from "react";
import Navbar from "./components/Navbar";
import { Hero } from "./Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CoinDetails } from "../pages/CoinDetails";
import Footer from "./components/Footer";
import { Pricing } from "../pages/Pricing";


import { MdFeaturedPlayList } from "react-icons/md";
import { Features } from "tailwindcss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/coin/:id" element={<CoinDetails />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* <Route path="/features" element={<Features/>} /> */}
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
