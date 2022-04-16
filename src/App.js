import { Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./Components/Pages/Error/Error";
import Home from "./Components/Pages/Home/Home/Home";
import Blogs from "./Components/Pages/Blogs/Blogs";
import About from "./Components/Pages/About/About";
import Header from "./Components/Sheared/Header/Header/Header";
import Login from "./Components/Pages/Authentication/Login/Login";
import Registration from "./Components/Pages/Authentication/Registation/Registration";
import RequireAuth from "./RequireAuth/RequireAuth";
import Footer from "./Components/Sheared/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/about"
          element={
            <RequireAuth>
              <About></About>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
