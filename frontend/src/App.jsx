import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import GlobalState from "./context/GlobalState";

function App() {
  return (
    <>
      <GlobalState>
        <BrowserRouter>
          <Navbar />
          <div className="container pb-4"></div>
          <Routes></Routes>
        </BrowserRouter>
      </GlobalState>
    </>
  );
}

export default App;
