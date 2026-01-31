// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Signup from "./components/pages/Signup";
// import Login from "./components/pages/Login";
// import Home from "./components/pages/Home/Home";
// import "./App.css";
// import Dashboard from "./components/pages/Dashboard/Dashboard";

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Home />
//         <Login />
//         <Routes>
//           <Route path="./signup" element={<Signup />} />
//           <Route path="./login:id" element={<Login />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home/Home";
import "./App.css";
import Dashboard from "./components/pages/Dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
