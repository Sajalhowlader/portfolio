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
import Footer from "./Pages/Shered/Footer";
import Header from "./Pages/Shered/Header";
function App() {
  return (
    <div className={AllCss}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="projectOne" element={<ProjectsOne />} />
        <Route path="projectsTwo" element={<ProjectsTwo />} />
        <Route path="projectsThree" element={<ProjectThree />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
