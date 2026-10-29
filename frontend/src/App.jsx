import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import GlobalState from "./context/GlobalState";
import UrheilijaLomake from "./components/UrheilijaLomake";
import UrheilijaLista from "./components/UrheilijaLista";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Navbar />

        <div className="container pb-4">
          <Routes>
            <Route path="/" element={<UrheilijaLista />} />
            <Route path="/lisaa" element={<UrheilijaLomake />} />
            <Route path="/muokkaa/:id" element={<UrheilijaLomake />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
