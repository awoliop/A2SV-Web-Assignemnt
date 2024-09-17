import React from "react";
import "./SearchBox.css";

const SearchBox = () => {
  return (
    <div className="search">
      <div className="blog-div">
        <p>Blogs</p>
      </div>
      <div className="searchbox-div">
        <input type="text" placeholder="Search..." />
        <button>
          <span>+ </span>New Blog
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
