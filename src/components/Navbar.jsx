import React from "react";
import Logo from "../assets/logo_.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section className="fixed top-0 left-0 right-0">
        <header className="max-w-[1400px] mx-auto py-5 ">
          <nav className=" flex justify-between items-center px-5 py-2">
            <div className="flex items-center gap-x-2">
              {/* <div className="p-1 rounded-xl bg-purple-200">
                <img src={Logo} alt="" className="w-10" />
              </div> */}
              <h1 className="text-xl bg-gradient-to-r from-pink-700 to-purple-800 bg-clip-text text-transparent font-medium">
                ResumeXpert
              </h1>
            </div>
            <div>
              <ul className="flex gap-x-5 mr-10">
                {/* Home  */}
                <li
                  className="font-medium text-lg text-purple-700 transition-all duration-300 hover:text-zinc-100"
                >
                  <Link to="/">Home</Link>
                </li>
                {/* Resume templete */}
                <li className="font-medium text-lg text-purple-700 transition-all duration-300 hover:text-zinc-100">
                  <Link to="/login">Resume Template</Link>
                </li>
                {/* create templete */}
                <li className="font-medium text-lg text-purple-700 transition-all duration-300 hover:text-zinc-100">
                  <Link>Generate </Link>
                </li>
                {/* about */}
                <li className="font-medium text-lg text-purple-700 transition-all duration-300 hover:text-zinc-100">
                  <Link>About Us</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </section>
    </>
  );
};

export default Navbar;
