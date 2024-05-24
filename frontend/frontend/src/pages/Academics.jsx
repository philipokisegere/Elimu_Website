import React from "react";
import Footer from "./Footer";
import Nav from "../components/Nav";
const Academics = () => {
  const bootCamps = [
    {
      title: "Web Development Boot Camp",
      description:
        "Learn the essentials of web development in this intensive boot camp.",
    },
    {
      title: "Data Science Boot Camp",
      description:
        "Gain practical skills in data analysis and machine learning.",
    },
    {
      title: "Cybersecurity Boot Camp",
      description:
        "Understand the fundamentals of cybersecurity and how to protect systems.",
    },
  ];

  const ciscoAcademies = [
    {
      title: "CCNA (Cisco Certified Network Associate)",
      description: "Comprehensive training in networking fundamentals.",
    },
    {
      title: "CCNP (Cisco Certified Network Professional)",
      description: "Advanced networking skills and knowledge.",
    },
    {
      title: "Cisco Cybersecurity Operations",
      description: "Learn to manage and respond to cybersecurity threats.",
    },
  ];

  const microsoftCourses = [
    {
      title: "Microsoft Azure Fundamentals",
      description: "Introduction to cloud computing with Azure.",
    },
    {
      title: "Microsoft Office Specialist",
      description: "Proficiency in Microsoft Office applications.",
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      description: "Manage and monitor Azure environments.",
    },
  ];

  const renderCard = (course) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-gray-600">{course.description}</p>
      </div>
    </div>
  );

  return (
    <div>
<Nav/>
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Academics</h1>
        <p className="mt-4 text-gray-500">
          Explore various academic activities and courses to enrich your
          learning experience.
        </p>
      </div>

      <div className="space-y-12">
        {/* Boot Camps Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Boot Camps</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bootCamps.map((course, index) => (
              <div key={index}>{renderCard(course)}</div>
            ))}
          </div>
        </section>

        {/* Cisco Academies Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Cisco Academies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ciscoAcademies.map((course, index) => (
              <div key={index}>{renderCard(course)}</div>
            ))}
          </div>
        </section>

        {/* Microsoft Courses Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Microsoft Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {microsoftCourses.map((course, index) => (
              <div key={index}>{renderCard(course)}</div>
            ))}
          </div>
        </section>
      </div>

       </div>
       <Footer/>
    </div>
  );
};

export default Academics;
