import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import RadioPlayer from "./components/RadioPlayer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Exhibition from "./pages/Exhibition.jsx";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <RadioPlayer />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}
