import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobrenos from "./pages/Sobrenos";
import Futsal from "./pages/Futsal";
import Volei from "./pages/Volei";
import Basquete from "./pages/Basquete";
import Queimada from "./pages/Queimada";
import Atletismo from "./pages/Atletismo";
import Tenisdemesa from "./pages/Tenisdemesa";
import Futmesa from "./pages/Futmesa";
import Handbol from "./pages/Handbol";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobrenos" element={<Sobrenos />} />
          <Route path="/futsal" element={<Futsal />} />
          <Route path="/volei" element={<Volei />} />
          <Route path="/basquete" element={<Basquete />} />
          <Route path="/queimada" element={<Queimada />} />
          <Route path="/atletismo" element={<Atletismo />} />
          <Route path="/tenisdemesa" element={<Tenisdemesa />} />
          <Route path="/futmesa" element={<Futmesa />} />
          <Route path="/handbol" element={<Handbol />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
