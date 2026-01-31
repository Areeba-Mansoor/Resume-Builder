// import React from "react";
// import Logo from "../../../assets/logo_.png";
// import HeroImage from "../../../assets/hero.png";
// import { FaArrowRight } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <>
//       <section className="bg-gradient-to-b from-purple-300 via-pink-200 to--200">
//         <header className="max-w-[1400px] mx-auto">
//           <nav className=" flex justify-between items-center px-5 py-2">
//             <div className="flex items-center gap-x-2">
//               <div className="p-1 rounded-xl bg-purple-200">
//                 <img src={Logo} alt="" className="w-10" />
//               </div>
//               <h1 className="text-xl bg-gradient-to-r from-pink-700 to-purple-800 bg-clip-text text-transparent font-medium">
//                 ResumeXpert
//               </h1>
//             </div>
//           </nav>
//         </header>

//         <div className=" max-w-[1400px] mx-auto py-24 flex flex-wrap">
//           <div className="flex-1">
//             <div className="w-60 bg-purple-100 p-2 rounded-4xl">
//               <p className="text-sm text-purple-800 pl-4 font-semibold">
//                 Professional Resume Builder
//               </p>
//             </div>

//             <h1 className="text-8xl mt-5 font-semibold leading-24">
//               Craft{" "}
//               <span className="bg-gradient-to-r from-pink-700 to-purple-800 bg-clip-text text-transparent">
//                 Professional
//               </span>{" "}
//               Resumes
//             </h1>

//             <p className="text-gray-700 text-md mt-4">
//               Create job-winning resumes with expertly designed <br />
//               templates ATS-friendly, recruiter-approved, and tailared <br />
//               to your career goals.
//             </p>

//             <div className="w-45 flex gap-x-3 justify-center items-center mt-8 bg-gradient-to-r from-pink-500 via-purple-600 to-purple-700 py-3 px-5 rounded-md cursor-pointer">
//               <Link
//                 to="/login"
//                 className="flex items-center gap-x-3 cursor-pointer"
//               >
//                 <button className="text-md font-medium text-white cursor-pointer">
//                   Start Building
//                 </button>
//                 <FaArrowRight className="text-white mt-1" />
//               </Link>
//             </div>
//           </div>

//           <div className="flex-1">
//             <img src={HeroImage} alt="" className="w-100 ml-15 mt-4" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;


import React from "react";
import Logo from "../../../assets/logo_.png";
import HeroImage from "../../../assets/hero.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-purple-300 via-pink-200 to-purple-200 min-h-screen">
        {/* Header / Navbar */}
        <header className="max-w-[1400px]  bg-red-500 mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-xl bg-purple-200">
                <img src={Logo} alt="Logo" className="w-10 sm:w-12" />
              </div>
              <h1 className="text-xl sm:text-2xl bg-gradient-to-r from-pink-700 to-purple-800 bg-clip-text text-transparent font-medium">
                ResumeXpert
              </h1>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <div className="max-w-[1400px] mx-auto py-16 sm:py-24 px-4 sm:px-10 flex flex-col-reverse lg:flex-row items-center gap-5 bg-amber-700">
          {/* Left Text Section */}
          <div className="flex-1 bg-green-400 ">
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
              Create job-winning resumes with expertly designed <br className="hidden sm:block" />
              templates ATS-friendly, recruiter-approved, and tailored <br className="hidden sm:block" />
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
          <div className="flex-1 flex justify-center  bg-green-400 ">
            <img
              src={HeroImage}
              alt="Hero"
              className="w-72 sm:w-100 md:w-[500px] lg:w-[400px] xl:w-[450px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

