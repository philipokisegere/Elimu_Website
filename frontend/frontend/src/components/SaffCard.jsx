import React from "react";

const SaffCard = ({ staff }) => {
  return (
    <div className="staff-card m-3 border w-80 rounded-xl p-1 shadow-lg">
      <div className="card-img">
        <img
          src={staff.img_url}
          alt={staff.staffName}
          className="h-[250px] w-[300px] object-cover"
        />
      </div>
      <div className="staff-details">
        <h3>
          Name: <span className=" font-light ">{staff.staffName}</span>
        </h3>
        <p>
          Email: <span className="font-light">{staff.staffEmail}</span>{" "}
        </p>
        <p>
          Department:
          <span className=" font-black">
            {staff.department.departmentName}
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default SaffCard;
