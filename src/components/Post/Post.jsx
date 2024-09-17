import React, { useEffect, useState } from "react";
import "./Post.css";
import UserCard from "../UserCard/UserCard";
import axios from "axios";

const Post = ({ title, description, logoUrl, createdBy, requiredSkills, datePosted }) => {
  return (
    <div>
      <>
        <UserCard createdBy={createdBy} requiredSkills={requiredSkills} datePosted={datePosted} />
        <div className="post-content">
          <div className="text-content">
            <h1 className="title-content">{title}</h1>
            <p className="article-content">{`${description.slice(0, 250)}...`}</p>
          </div>
          <div className="img-content">
            <img src={logoUrl} alt="" height={250} width={320} />
          </div>
        </div>
      </>
    </div>
  );
};

export default Post;
