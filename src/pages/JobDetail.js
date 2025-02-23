/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
//import { useParams } from "next/navigation";
import Siderbar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import JobApplicationPopup from "../components/PopupApply_user";

const JobDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  
  const jobData = {
    title: "Social Media Assistant",
    company: "Stripe",
    location: "Paris, France",
    type: "Full-Time",
    description:
      "Stripe is looking for a Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.",
    responsibilities: [
      "Community engagement to ensure that it&apos;s supported and actively represented online",
      "Focus on social media content development and publication",
      "Marketing and strategy support",
      "Stay on top of trends on social media platforms, and suggest content ideas to the team",
      "Engage with online communities",
    ],
    requirements: [
      "You get energy from people and building the ideal work environment",
      "You have a sense for beautiful spaces and office experiences",
      "You are a confident office manager, ready for added responsibilities",
      "You&apos;re detail-oriented and creative",
      "You&apos;re a growth marketer and know how to run campaigns",
    ],
    niceToHaves: ["Fluent in English", "Project management skills", "Copy editing skills"],
    applied: 5,
    capacity: 10,
    applyBefore: "July 31, 2021",
    postedOn: "July 1, 2021",
    salary: "$75k-$85k USD",
    categories: ["Marketing", "Design"],
    skills: ["Project Management", "Copywriting", "English", "Social Media Marketing", "Copy Editing"],
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans w-full h-screen overflow-hidden">
      <Siderbar />
      <div className="overflow-y-auto w-full p-6">
        <div className="border-b-2 border-gray-200 pb-4 flex-1">
          <DashboardHeader dashboardHeaderName={"Job Detail"} />
        </div>
        <div className="flex items-center mb-6 mx-auto bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://placehold.co/60x60"
            alt="Company logo"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-bold">{jobData.title}</h2>
            <p className="text-gray-500">
              {jobData.company} • {jobData.location} • {jobData.type}
            </p>
          </div>
          <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => setIsOpen(true)}>
            Apply
          </button>
          <JobApplicationPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>

        <div className="flex p-8 space-y-8 text-base">
          <div className="bg-white p-6 rounded-lg shadow-md w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Description</h3>
            <p className="text-gray-700">{jobData.description}</p>
            <h3 className="text-2xl font-semibold mt-6">Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-700">
              {jobData.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3 className="text-2xl font-semibold mt-6">Who You Are</h3>
            <ul className="list-disc list-inside text-gray-700">
              {jobData.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3 className="text-2xl font-semibold mt-6">Nice-To-Haves</h3>
            <ul className="list-disc list-inside text-gray-700">
              {jobData.niceToHaves.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="ml-4 w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">About this role</h3>
              <p className="text-gray-700">
                <span className="font-semibold">{jobData.applied} applied</span> of {jobData.capacity} capacity
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${(jobData.applied / jobData.capacity) * 100}%` }}></div>
              </div>
              <p className="text-gray-700"><span className="font-semibold">Apply Before:</span> {jobData.applyBefore}</p>
              <p className="text-gray-700"><span className="font-semibold">Job Posted On:</span> {jobData.postedOn}</p>
              <p className="text-gray-700"><span className="font-semibold">Salary:</span> {jobData.salary}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mt-6">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="flex space-x-2">
                {jobData.categories.map((category, index) => (
                  <span key={index} className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
