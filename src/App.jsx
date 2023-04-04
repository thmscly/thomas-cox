import React from "react";
import Routing from "./components/Routing";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./layouts/NavBar";

function App() {
  return (
    <Router>
      <div className="text-emerald-700 font-mono min-w-screen min-h-screen content-center bg-black">
        <NavBar />
        <div>
          <Routing />
        </div>
      </div>
    </Router>
  );
}

export default App;
