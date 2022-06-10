import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AllCss from "./Css/AllCss.css";
import Header from "./Pages/Home/Header";
function App() {
  return (
    <div className={AllCss}>
      <Header />
      <ToastContainer />
    </div>
  );
}

export default App;
