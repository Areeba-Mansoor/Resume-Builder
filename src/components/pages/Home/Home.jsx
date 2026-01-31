import React from "react";
import Logo from "../../../assets/logo_.png";
import HeroImage from "../../../assets/hero.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import About from "../About";
import Contact from "../../Contact";
import Features from "../../Features";

const Home = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-purple-300 via-pink-200 to-purple-200 min-h-screen">
        {/* Navbar component  */}
        <Navbar />

        {/* Main Content */}
        <div className="max-w-[1400px] mx-auto mt-[70px] py-10 sm:py-24 px-4 sm:px-10 flex flex-col-reverse lg:flex-row items-center gap-5">
          {/* Left Text Section */}
          <div className="flex-1 ">
            <div className="w-52 sm:w-60  bg-purple-100 p-2 rounded-3xl mb-4  shadow-lg shadow-purple-800/40">
              <p className="text-sm sm:text-base text-purple-800 pl-3 sm:pl-4 font-semibold">
                Professional Resume Builder
              </p>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-[80px] font-semibold leading-tight sm:leading-snug lg:leading-[1.2]">
              Craft{" "}
              <span className="bg-gradient-to-r from-pink-700 to-purple-800 bg-clip-text text-transparent mr-5">
                Professional
              </span>{" "}
              Resumes
            </h1>

            <p className="text-gray-800 text-md sm:text-md mt-4 sm:mt-6 leading-relaxed">
              Create job-winning resumes with expertly designed{" "}
              <br className="hidden sm:block" />
              templates ATS-friendly, recruiter-approved, and tailored{" "}
              <br className="hidden sm:block" />
              to your career goals.
            </p>

            <div className="mt-6 sm:mt-8">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-pink-500 via-purple-600 to-purple-700 py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:scale-105 transition-transform duration-300"
              >
                <span className="text-white font-medium text-sm sm:text-base">
                  Start Building
                </span>
                <FaArrowRight className="text-white" />
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 flex justify-center ">
            <img
              src={HeroImage}
              alt="Hero"
              className="w-72 sm:w-100 md:w-[500px] lg:w-[400px] xl:w-[450px]"
            />
          </div>
        </div>
      </section>
      <About />
      <Features />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
