// import React from "react";
// import Feature1 from '../assets/feature-1.webp'
// import Feature2 from '../assets/feature-2.webp'
// import Feature3 from '../assets/feature-3.webp'
// import Feature4 from '../assets/feature-4.webp'
// import Feature5 from '../assets/feature-5.webp'

// const Features = () => {
//   return (
//     <>
//       <div className="w-full py-10">
//         <div className="max-w-[1400px] mx-auto mt-10">
//           <h1 className="text-4xl  bg-gradient-to-r from-pink-700 to-purple-800 bg-clip-text text-transparent font-semibold text-center">
//             Why Use ResumeXpert Generator?
//           </h1>
//           <div className=" max-w-[1200px]  mt-15 mx-auto flex justify-center gap-5">
//             <div className="max-w-[230px] px-2 flex flex-col items-center text-center ">
//               <img src={Feature1} alt="" className="ml-8"/>
//               <h2 className="mt-5 text-2xl font-medium text-purple-800">Faster applications</h2>
//               <p className="mt-3 text-zinc-800">Write a polished cover <br /> letter in less than 5 minutes</p>
//             </div>
//             <div className="max-w-[230px] px-2 flex flex-col items-center text-center ">
//               <img src={Feature2} alt="" />
//               <h2 className="mt-5 text-2xl font-medium text-purple-800">Tailored to the job</h2>
//               <p className="mt-3 text-zinc-800">Personalization based on job description, your background, and skills</p>
//             </div>
//             <div className="max-w-[230px] px-2  flex flex-col items-center text-center ">
//               <img src={Feature3} alt="" />
//               <h2 className="mt-5 text-2xl font-semibold text-purple-800">Boosts your confidence</h2>
//               <p className="mt-3 text-zinc-800">Know you’re sending a letter that works</p>
//             </div>
//             <div className="max-w-[230px] px-2  flex flex-col items-center text-center ">
//               <img src={Feature4} alt="" />
//               <h2 className="mt-5 text-2xl font-semibold text-purple-800">Built by experts</h2>
//               <p className="mt-3 text-zinc-800">Created by resume and HR professionals, powered by smart AI</p>
//             </div>
//             <div className="max-w-[230px] flex flex-col items-center text-center ">
//               <img src={Feature5} alt="" />
//               <h2 className="mt-5 text-2xl font-semibold text-purple-800">Flexible editing tools</h2>
//               <p className="mt-3 text-zinc-800"> Make unlimited updates until it feels just right</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Features;

import React from "react";
import Feature1 from '../assets/feature-1.webp'
import Feature2 from '../assets/feature-2.webp'
import Feature3 from '../assets/feature-3.webp'
import Feature4 from '../assets/feature-4.webp'
import Feature5 from '../assets/feature-5.webp'

const Features = () => {
  return (
    <div className="w-full py-24 px-4">
      <div className="max-w-[1400px] mx-auto mt-5">
        
        <h1 className="text-3xl sm:text-4xl bg-gradient-to-r from-pink-700 to-purple-800 bg-clip-text text-transparent font-semibold text-center">
          Why Use ResumeXpert Generator?
        </h1>

        {/* GRID CONTAINER */}
        <div className="
          max-w-[1200px] 
          mt-12 
          mx-auto 
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-5 
          gap-8
        ">
          
          {/* CARD 1 */}
          <div className="flex flex-col items-center text-center px-4">
            <img src={Feature1} alt="Faster applications" className="w-20 h-20 object-contain"/>
            <h2 className="mt-5 text-xl font-medium text-purple-800">Faster applications</h2>
            <p className="mt-3 text-zinc-800 text-sm">
              Write a polished cover letter in less than 5 minutes
            </p>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col items-center text-center px-4">
            <img src={Feature2} alt="Tailored to the job" className="w-20 h-20 object-contain"/>
            <h2 className="mt-5 text-xl font-medium text-purple-800">Tailored to the job</h2>
            <p className="mt-3 text-zinc-800 text-sm">
              Personalization based on job description, your background, and skills
            </p>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col items-center text-center px-4">
            <img src={Feature3} alt="Boosts your confidence" className="w-20 h-20 object-contain"/>
            <h2 className="mt-5 text-xl font-semibold text-purple-800">Boosts your confidence</h2>
            <p className="mt-3 text-zinc-800 text-sm">
              Know you’re sending a letter that works
            </p>
          </div>

          {/* CARD 4 */}
          <div className="flex flex-col items-center text-center px-4">
            <img src={Feature4} alt="Built by experts" className="w-20 h-20 object-contain"/>
            <h2 className="mt-5 text-xl font-semibold text-purple-800">Built by experts</h2>
            <p className="mt-3 text-zinc-800 text-sm">
              Created by resume and HR professionals, powered by smart AI
            </p>
          </div>

          {/* CARD 5 */}
          <div className="flex flex-col items-center text-center px-4">
            <img src={Feature5} alt="Flexible editing tools" className="w-20 h-20 object-contain"/>
            <h2 className="mt-5 text-xl font-semibold text-purple-800">Flexible editing tools</h2>
            <p className="mt-3 text-zinc-800 text-sm">
              Make unlimited updates until it feels just right
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Features;
