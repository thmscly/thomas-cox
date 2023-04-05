import React from "react";
import Routing from "./components/Routing";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./layouts/NavBar";

function App() {
  return (
    <Router>
      <div className="text-green-600 font-mono min-w-screen min-h-screen content-center bg-black ">
        <div>
          <NavBar />
        </div>
        <div className="grid grid-flow-row mt-20">
          <span className="place-self-center max-w-4xl">
            <Routing />
          </span>
        </div>
      </div>
    </Router>
  );
}

export default App;
