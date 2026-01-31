// import React from "react";
// import Logo from "../assets/logo_.png";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <section className="fixed top-0 left-0 right-0 bg-gradient-to-b from-purple-300  to-purple-300 ">
//         <header className="max-w-[1400px] h-[100px] mx-auto py-5 ">
//           <nav className=" flex justify-between items-center px-5 py-2">
//             <div className="flex items-center gap-x-2">
//               <div className="p-1 rounded-xl bg-purple-200">
//                 <img src={Logo} alt="" className="w-10" />
//               </div>
//               <h1 className="text-xl bg-gradient-to-r from-pink-700 to-purple-800 bg-clip-text text-transparent font-medium">
//                 ResumeXpert
//               </h1>
//             </div>
//             <div>
//               <ul className="flex gap-x-5 mr-10">
//                 {/* Home  */}
//                 <li
//                   className="font-medium text-lg text-purple-700 transition-all duration-300 hover:text-zinc-100"
//                 >
//                   <Link to="/">Home</Link>
//                 </li>
//                 {/* Resume templete */}
//                 <li className="font-medium text-lg text-purple-700 transition-all duration-300 hover:text-zinc-100">
//                   <Link to="/dashboard">Resume Template</Link>
//                 </li>
//                 {/* create templete */}
//                 <li className="font-medium text-lg text-purple-700 transition-all duration-300 hover:text-zinc-100">
//                   <Link>Generate </Link>
//                 </li>
//                 {/* about */}
//                 <li className="font-medium text-lg text-purple-700 transition-all duration-300 hover:text-zinc-100">
//                   <Link>About Us</Link>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </header>
//       </section>
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import Logo from "../assets/logo_.png";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="fixed top-0 left-0 right-0 bg-gradient-to-b from-purple-300 to-purple-300 z-50 ">
      <header className="max-w-[1400px] mx-auto py-5 px-4 sm:px-6 lg:px-10">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-1 rounded-xl bg-purple-200">
              <img src={Logo} alt="Logo" className="w-10" />
            </div>
            <h1 className="text-xl bg-gradient-to-r from-pink-700 to-purple-800 bg-clip-text text-transparent font-medium">
              ResumeXpert
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-x-5">
            <li className="font-medium text-lg text-purple-700 hover:text-zinc-100 transition-colors duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="font-medium text-lg text-purple-700 hover:text-zinc-100 transition-colors duration-300">
              <Link to="/dashboard">Resume Template</Link>
            </li>
            <li className="font-medium text-lg text-purple-700 hover:text-zinc-100 transition-colors duration-300">
              <Link to="/generate">Generate</Link>
            </li>
            <li className="font-medium text-lg text-purple-700 hover:text-zinc-100 transition-colors duration-300">
              <Link to="/about">About Us</Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-purple-700 focus:outline-none">
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 mt-4 bg-purple-100 p-4 rounded-lg shadow-lg">
            <li className="font-medium text-lg text-purple-700 hover:text-zinc-100 transition-colors duration-300">
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="font-medium text-lg text-purple-700 hover:text-zinc-100 transition-colors duration-300">
              <Link to="/dashboard" onClick={() => setIsOpen(false)}>Resume Template</Link>
            </li>
            <li className="font-medium text-lg text-purple-700 hover:text-zinc-100 transition-colors duration-300">
              <Link to="/generate" onClick={() => setIsOpen(false)}>Generate</Link>
            </li>
            <li className="font-medium text-lg text-purple-700 hover:text-zinc-100 transition-colors duration-300">
              <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            </li>
          </ul>
        )}
      </header>
    </section>
  );
};

export default Navbar;
