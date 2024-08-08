import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Example from "./pages/Example";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example" element={<Example />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
