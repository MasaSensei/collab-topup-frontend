import React from "react";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button";
import InputForm from "../../atoms/Input";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="fixed left-0 w-full top-0 z-50 bg-slate-700">
      <nav className="flex items-baseline justify-between pt-3 space-x-6 px-32 mx-auto max-w-1440px">
        <div className="flex items-center w-full space-x-6">
          <div className="relative w-full space-y-3">
            <div className="flex w-full">
              <div className="w-full flex items-center">
                <div className="w-full">
                  <InputForm
                    type="text"
                    name="search"
                    placeholder="Search Your Game"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="whitespace-nowrap">
            <Button>
              <Link to="/register">Register</Link>
            </Button>
          </div>
          <div className="whitespace-nowrap">
            <Button>
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
      </nav>
      <div className="py-3 flex justify-center px-32 mx-auto max-w-1440px">
        <div className="header"></div>
      </div>
    </header>
  );
};

export default Navbar;
