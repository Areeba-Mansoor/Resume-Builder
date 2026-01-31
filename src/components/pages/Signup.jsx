// import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../Firebase/firebase";

// import React from "react";

// const Signup = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handleSignup = (e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(() => alert("Signed up!"))
//       .catch((error) => alert(error.message));
//   };

//   return (
//     <>
//       <div>
//         <form onSubmit={handleSignup}>
//           <h2>Signup</h2>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <br />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br />
//           <button type="submit">Signup</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar";
import { SiGnuprivacyguard } from "react-icons/si";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Authentication Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    // Check if any field is empty
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      toast.success("Signup Success!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen w-full bg-white p-4 bg-gradient-to-b from-purple-300 via-pink-200 to--200">
        <div className="border border-gray-300 rounded-2xl shadow-xl bg-white p-6 md:p-8 w-full max-w-[400px]">
          <div className="text-center mb-6">
            <h1 className="font-extrabold text-center md:text-3xl mb-2 mb-5 bg-gradient-to-r from-pink-700 to-purple-800 bg-clip-text text-transparent">
              Signup
              {/* <SiGnuprivacyguard className="text-xl  text-purple-700"/> */}
            </h1>
            <p className="text-gray-500 font-medium text-sm md:text-base">
              Create a new account
            </p>
          </div>

          {/* Form with proper spacing */}
          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            {/* Name */}
            <div className="space-y-1">
              <input
                type="text"
                value={formData.name}
                placeholder="Enter Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <input
                type="email"
                value={formData.email}
                placeholder="Enter Email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <input
                type="password"
                value={formData.password}
                placeholder="Enter Password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
              />
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <input
                type="password"
                value={formData.confirmPassword}
                placeholder="Confirm Password"
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
              />
            </div>

            {/* Signup Button */}
            <div className="mt-2">
              <button
                type="submit"
                className="w-full py-2 md:py-3 text-white bg-gradient-to-r from-purple-800 via-purple-700 to-purple-500 rounded-md hover:bg-gay-700 transition duration-200 text-sm md:text-base cursor-pointer"
              >
                Sign Up
              </button>
            </div>

            <div className="pt-2 border-t border-gray-200 mt-4">
              <p className="text-center text-xs md:text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
