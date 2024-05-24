import React from "react";

const CourseCard = ({ name, img, desc }) => {
  return (
    <div  className="bg-white rounded-lg shadow p-4">
      <h3 className="text-xl font-bold mt-4">{name}</h3>
      <img
        src={img}
        alt={name}
        className="w-full h-48 object-cover rounded"
      />
      <p className="text-gray-500 mt-2">{desc}</p>
    </div>
  );
};

export default CourseCard;
