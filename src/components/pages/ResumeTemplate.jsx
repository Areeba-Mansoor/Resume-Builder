import React from "react";
import Template1  from "../../assets/template-1.jpg"
import Template2  from "../../assets/template-3.avif"
import Template3  from "../../assets/templete-5.avif"


const ResumeTemplate = () => {
  return (
    <section className="w-full min-h-screen mt-[100px] px-4 sm:px-6 lg:px-10">
      {/* Heading */}
      <div className="max-w-[1400px] mx-auto p-7">
        <h1 className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-pink-700 to-purple-800 bg-clip-text text-transparent font-medium mt-5 text-center sm:text-left">
          Choose Your Template
        </h1>
      </div>

      {/* Templates */}
      <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center sm:justify-start gap-5 mt-10">
        <div>
          <img
            src={Template1}
            alt="Template 1"
            className="w-64 sm:w-72 md:w-80 lg:w-96 cursor-pointer rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div>
          <img
            src={Template2}
            alt="Template 2"
            className="w-64 sm:w-72 md:w-80 lg:w-96 cursor-pointer rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div>
          <img
            src={Template3}
            alt="Template 3"
            className="w-64 sm:w-72 md:w-80 lg:w-96 cursor-pointer rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default ResumeTemplate;
