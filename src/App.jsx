import React from "react";
import Routing from "./components/Routing";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import TitleAnimation from "./components/TitleAnimation";

function App() {
  return (
    <Router>
      <div className="text-green-600 font-mono min-w-screen min-h-screen bg-black pb-2">
        <div>
          <NavBar />
        </div>
        <div className="grid grid-flow-row gap-5 mt-10">
          <TitleAnimation />
          <Routing />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
