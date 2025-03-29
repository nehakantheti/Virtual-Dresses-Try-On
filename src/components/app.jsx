import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Dresses from "./dresses";
import Footer from "./footer";

const TryOn = () => <div style={{ padding: '2rem' }}><h1>Try-On Page (Under Construction)</h1></div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tryon/:id" element={<TryOn />} />
        <Route path="/dresses" element={<Dresses />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;