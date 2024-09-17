import React from "react";
import "./postList.css";
import axios from "axios";
import Post from "../Post/Post";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const PostList = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  const postFetcher = async () => {
    try {
      const response = await axios.get("https://akil-backend.onrender.com/opportunities/search");
      const data = response.data.data;
      setPost(data);
      console.log(data);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    postFetcher();
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
          <CircularProgress />
        </div>
      ) : (
        <div>
          <div className="postList-div">
            {post.slice(0, 2).map((p) => (
              <>
                <hr />
                <Post
                  title={p.title}
                  description={p.description}
                  logoUrl={p.logoUrl}
                  createdBy={p.createdBy}
                  requiredSkills={p.requiredSkills[0]}
                  datePosted={p.datePosted}
                />
              </>
            ))}
            {post.length > 2 && <>{/* Skip middle posts */}</>}
            {post.slice(-2).map((p) => (
              <>
                <hr />
                <Post
                  title={p.title}
                  description={p.description}
                  logoUrl={p.logoUrl}
                  createdBy={p.createdBy}
                  requiredSkills={p.requiredSkills[0]}
                  datePosted={p.datePosted}
                />
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PostList;
