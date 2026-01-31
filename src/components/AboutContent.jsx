import React from "react";
import { FaRegFilePdf } from "react-icons/fa6";
import { IoColorFilterOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { FaCloudDownloadAlt } from "react-icons/fa";
import AboutImage from "../assets/about-image.png"

const AboutContent = () => {
  return (
    <div>
      <section class="bg-gray-50 py-16 mt-[150px]">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          <div class="md:w-1/2 space-y-6">
            <h2 class="text-4xl font-bold text-purple-500">
              Build Your Dream Resume
            </h2>

            <p class="text-zinc-500 font-medium">
              Our Resume Builder app helps you create professional resumes
              quickly and easily. Choose from multiple templates, add your
              skills, education, and experience, and download your resume in PDF
              format. Stand out and impress employers effortlessly!
            </p>
            <ul class="space-y-2 text-blue-500">
              <li className="flex gap-x-3 mt-3">
                {" "}
                <IoColorFilterOutline className="text-pink-500 text-xl" />{" "}
                Stylish & customizable templates
              </li>
              <li className="flex gap-x-3 mt-3">
                <FiEdit className="text-pink-500 text-xl" /> Real-time preview
                while editing
              </li>
              <li className="flex gap-x-3 mt-3">
                {" "}
                <FaCloudDownloadAlt className="text-pink-500 text-xl" /> Export
                as PDF instantly
              </li>
              <li className="flex gap-x-3 mt-3">
                {" "}
                <FaRegFilePdf className="text-pink-500 text-xl" /> Perfect for
                students, professionals, and job seekers
              </li>
            </ul>
          </div>

          <div class="md:w-1/2">
            <img
              src={AboutImage}
              alt="Resume Builder Illustration"
              class="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
