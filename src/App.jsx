import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SearchBox from "./components/SearchBox/SearchBox";
import PostList from "./components/PostList/PostList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <SearchBox />
      <PostList />
    </>
  );
}

export default App;
