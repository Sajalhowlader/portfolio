import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import bannerImg from "../../images/ppp.png";
const Banner = () => {
  return (
    <section>
      <div className="banner-container ">
        <div className="banner-info">
          <p>WELCOME TO MY WORLD</p>
          <h2>Hi ! I'm</h2>
          <h1>SAJAL HOWLADER</h1>
          <div>
            <p>FIND ME ON</p>
            <div className="social-div">
              <button className="social-btn">
                <FaFacebook />
              </button>
              <button className="social-btn">
                <FaGithub />
              </button>
              <button className="social-btn">
                <FaLinkedin />
              </button>
            </div>
          </div>
        </div>
        <div className="banner-img">
          <div className="img-shadow">
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
