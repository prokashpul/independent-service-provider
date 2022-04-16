import { Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./Components/Pages/Error/Error";
import Home from "./Components/Pages/Home/Home/Home";
import Blogs from "./Components/Pages/Blogs/Blogs";
import About from "./Components/Pages/About/About";
import Header from "./Components/Sheared/Header/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </>
  );
}

export default App;
