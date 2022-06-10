import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AllCss from "./Css/AllCss.css";
import ProjectsOne from "./Pages/Details/ProjectsOne";
import ProjectsTwo from "./Pages/Details/ProjectsTwo";
import ProjectThree from "./Pages/Details/ProjectThree";
import Home from "./Pages/Home/Home";
import About from "./Pages/Shered/About";
import Blog from "./Pages/Shered/Blog";
import Footer from "./Pages/Shered/Footer";
import Header from "./Pages/Shered/Header";
function App() {
  return (
    <div className={AllCss}>
      <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/about" element={<About/>}/>
        <Route path ="/blog" element={<Blog/>}/>
        <Route path="projectOne" element={<ProjectsOne />} />
        <Route path="projectsTwo" element={<ProjectsTwo />} />
        <Route path="projectsThree" element={<ProjectThree />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
      </div>
  );
}

export default App;
