import React from "react";
import Image from "next/image";
import { FaEnvelope, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Sidebar from "../../components/SidebarCompany";

const CompanyProfile = () => {
  const companyInfo = {
    name: "Nomad",
    website: "https://nomad.com",
    logo: "https://storage.googleapis.com/a1aa/image/C_i3yv8tVuzyVoJ-RH9OLFUTa7cMt_my-7Yg8Ak5vik.jpg",
    description:
      "Nomad is a software platform for starting and running internet businesses...",
    contact: [
      { name: "Twitter", url: "https://twitter.com/Nomad", icon: <FaTwitter /> },
      { name: "Facebook", url: "https://facebook.com/NomadHQ", icon: <FaFacebook /> },
      { name: "LinkedIn", url: "https://linkedin.com/company/nomad", icon: <FaLinkedin /> },
      { name: "Email", url: "mailto:nomad@gmail.com", icon: <FaEnvelope /> },
    ],
    officeLocation: "Vietnam",
    team: [
      {
        name: "Célestin Gardinier",
        role: "CEO & Co-Founder",
        image: "https://storage.googleapis.com/a1aa/image/team1.jpg",
      },
      {
        name: "Reynaud Colbert",
        role: "Co-Founder",
        image: "https://storage.googleapis.com/a1aa/image/team2.jpg",
      },
      {
        name: "Arienne Lyon",
        role: "Managing Director",
        image: "https://storage.googleapis.com/a1aa/image/team3.jpg",
      },
    ],
    workingAt: [
      "https://storage.googleapis.com/a1aa/image/61u3qdAUFt9HtPMKsxe-lQHFAbMUu3mLFwxCPyCrsrg.jpg",
      "https://storage.googleapis.com/a1aa/image/IXk9mPDoqpvJ1K2meg6BtrrUPEzZOeuLYapS63pWGvQ.jpg",
      "https://storage.googleapis.com/a1aa/image/aqfFF-2mz7JiDZdTzmHTbHF2BNuhYVxH_MgHYjlS5l4.jpg",
      "https://storage.googleapis.com/a1aa/image/3wLycfo7tXIRBi_Tl-kryg0lUjFv9yoSk_8REZifDG4.jpg",
    ],
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8 grid grid-cols-12 gap-8">
        {/* Left Column (60%) */}
        <div className="col-span-12 md:col-span-8">
          {/* Company Header Section */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <Image
                src={companyInfo.logo}
                alt="Company logo"
                width={64}
                height={64}
                className="rounded-lg"
              />
              <div className="ml-4">
                <h1 className="text-3xl font-bold">{companyInfo.name}</h1>
                <a href={companyInfo.website} className="text-blue-600 text-sm">
                  {companyInfo.website}
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Public View</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Profile Settings</button>
            </div>
          </div>

          {/* Company Profile Section */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-semibold mb-4">Company Profile</h2>
            <p className="text-gray-700">{companyInfo.description}</p>
          </div>

          {/* Contact Information Section */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <div className="flex space-x-6">
              {companyInfo.contact.map((contact, index) => (
                <a key={index} href={contact.url} className="text-blue-600 flex items-center space-x-2">
                  {contact.icon} <span>{contact.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Working at Nomad Section */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-semibold mb-4">Working at Nomad</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {companyInfo.workingAt.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Working at Nomad ${index + 1}`}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (40%) */}
        <div className="col-span-12 md:col-span-4">
          {/* Team Section */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-semibold mb-4">Our Team</h2>
            <div className="space-y-4">
              {companyInfo.team.map((member, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-medium">{member.name}</h3>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Office Location */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Office Location</h2>
            <p className="text-gray-700">{companyInfo.officeLocation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
