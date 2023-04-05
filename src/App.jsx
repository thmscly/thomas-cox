import React from "react";
import Routing from "./components/Routing";
import "./App.css";
import "./index.css";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import TitleAnimation from "./components/TitleAnimation";

function App() {
  return (
    <div className="grid justify-items-center text-green-600 font-mono min-w-screen min-h-screen bg-black pb-2">
      <div className="w-3/5">
        <div>
          <NavBar />
        </div>
        <div className="grid grid-flow-row gap-5 mt-10">
          <Routing />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
