import React from "react";
import "./../src/App.css";
import Carousel from "./components/organism/Carousel/Carousel";
import Navbar from "./components/organism/Navbar/Navbar";

const App = () => {
  return (
    <div className="min-h-screen mx-auto bg-white max-w-1440px sm:px-32">
      <Navbar />
      <div className="w-full" style={{ height: "77px" }}></div>
      <main className="">
        <div>
          <Carousel />
        </div>
        <h1>Test</h1>
      </main>
    </div>
  );
};

export default App;
