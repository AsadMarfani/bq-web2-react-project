import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { lazy, Suspense } from "react";
// import "./styles/App.css";

const Home = lazy(() => import("./components/Home"));
const PostsList = lazy(() => import("./components/PostsLists"));
const PostDetail = lazy(() => import("./components/PostDetail"));
const AddPost = lazy(() => import("./components/AddPosts"));

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="posts" element={<PostsList />} />
          <Route path="posts/:postId" element={<PostDetail />} />
          <Route path="add-post" element={<AddPost />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
