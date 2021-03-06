import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Typed from "react-typed";
import bannerImg from "../../images/ppp.png";
const Banner = () => {
  return (
    <section>
      <div className="banner-container ">
        <div className="banner-info">
          <p>WELCOME TO MY WORLD</p>
          <h2>Hi ! I'm</h2>
          <h1>SAJAL HOWLADER</h1>
          <div className="ttyy">
            <strong> I'M A </strong>
            <Typed
              className="Tyedd"
              strings={[
                " Web Developer",
                " Web Designer",
                " Responsive Designer",
              ]}
              typeSpeed={35}
              backSpeed={40}
              loop
            ></Typed>
          </div>
          <div>
            <p>FIND ME ON</p>
            <div className="social-div">
              <a href="/" rel="noopener noreferrer" className="social-btn">
                <FaFacebook />
              </a>
              <a href="https://github.com/Sajalhowlader" target="_blank"
        rel="noopener noreferrer" className="social-btn ">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/sajal-howlader/" target="_blank"
        rel="noopener noreferrer" className="social-btn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
