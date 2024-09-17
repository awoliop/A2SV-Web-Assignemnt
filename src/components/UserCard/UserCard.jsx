import React from "react";
import "./UserCard.css";
import dateFormat, { masks } from "dateformat";

const UserCard = ({ createdBy, requiredSkills, datePosted }) => {
  const formatted = dateFormat(Date(datePosted), "dddd, mmmm dS").toString();
  // console.log(formatter);

  return (
    <div className="UserCard-div">
      <div className="img-div">
        <img src="./src/assets/placeholder.png" alt="" height={80} width={80} />
      </div>
      <div className="info-div">
        <div className="user-div">
          <h3>{createdBy}</h3>
          <span>
            <span>.</span>
            {formatted}
          </span>
        </div>
        <div className="carrer-div">
          <p>{requiredSkills}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
