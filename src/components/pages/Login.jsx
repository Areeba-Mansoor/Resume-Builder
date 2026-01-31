import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      toast.success("Login Successful");
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
        <div className="border border-gray-300 rounded-2xl shadow-xl bg-white p-6 md:p-10 w-full max-w-[400px] space-y-4 md:space-y-6">
          <div className="text-center">
            <h1 className="font-extrabold text-2xl md:text-3xl mb-2 bg-gradient-to-r from-pink-700 to-purple-800 bg-clip-text text-transparent">
              Welcome!
            </h1>
            <p className="text-gray-500 font-medium text-sm md:text-base">
              Sign in to continue
            </p>
          </div>

          <form
            onSubmit={handleLogin}
            className="flex flex-col space-y-4 md:space-y-6"
          >
            {/* Email */}
            <div>
              <input
                type="email"
                value={formData.email}
                placeholder="Enter email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
              />
            </div>

            {/* Password */}
            <div>
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

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 md:py-3 text-white  rounded-md hover:scale-105 transition duration-300 ease-in-out text-sm md:text-base cursor-pointer  bg-gradient-to-r from-purple-800 via-purple-700 to-purple-500"
            >
              Login
            </button>

            <p className="text-center text-xs md:text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-pink-600 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
