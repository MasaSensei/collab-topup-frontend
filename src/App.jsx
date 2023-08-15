import React from "react";
import "./../src/App.css";
import Navbar from "./components/organism/Navbar/Navbar";

const App = () => {
  return (
    <div className="min-h-screen mx-auto bg-white max-w-1440px sm:px-32">
      <Navbar />
      <div className="w-full" style={{ height: "77px" }}></div>
      <main className="">
        <div className="block">
          <div className="relative pt-4">
            <div className="z-2 w-full rounded-lg">
              <div className="rounded-lg relative">
                <div className="absolute h-87px sm:h-40 w-full bg-slate-500 rounded-lg skeleton">
                  <h1>Testing</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
