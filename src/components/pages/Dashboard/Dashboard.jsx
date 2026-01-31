import React from "react";
import Navbar from "../../Navbar";
import ResumeTemplate from "../ResumeTemplate";

const Dashboard = () => {
  return (
    <>
      <div className="min-h-screen ">
        <Navbar />
        <ResumeTemplate />
      </div>
    </>
  );
};

export default Dashboard;
