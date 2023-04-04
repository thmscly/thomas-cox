import React from "react";
import Routing from "./components/Routing";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./layouts/NavBar";

function App() {
  return (
    <Router>
      <div className="App text-slate-700 font-raleway min-w-screen content-center">
        <NavBar />
        <div>
          <Routing />
        </div>
      </div>
    </Router>
  );
}

export default App;
