import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PostsList from "./components/PostsLists";
import PostDetail from "./components/PostDetail";
import AddPost from "./components/AddPosts";
// import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<PostsList />} />
        <Route path="posts/:postId" element={<PostDetail />} />
        <Route path="add-post" element={<AddPost />} />
      </Routes>
    </div>
  );
};

export default App;
