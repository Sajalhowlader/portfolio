import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AllCss from "./Css/AllCss.css";
import Header from "./Pages/Home/Header";
import { openRoutes } from "./Pages/Routes/PublicRoutes";
function App() {
  return (
    <div className={AllCss}>
      <Header />
      <Routes>
           {openRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))}
        </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
