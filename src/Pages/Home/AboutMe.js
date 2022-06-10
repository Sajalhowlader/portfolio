import aboutImg from "../../images/ll.png";
const AboutMe = () => {
  return (
    <div className="about">
      <div className="title">
        <h1>About Me</h1>
        <p className="c-one"></p>
        <p className="c-two"></p>
      </div>
      <div className="about-container">
        <div className="about-img">
         <div className="img-shadow">
         <img className="img-fluid" src={aboutImg} alt="" />
         </div>
        </div>
        <div className="about-info">
          <h2>
            I A React.js Developer.I want to learn be a Boss of Programming.
          </h2>
          <p>
            Hi! I am Sajal Howlader.Currently I am studying department of Social
            Science.In addition to my academic studies i give my best effort to
            learn programming.I love programming from my soul.Thats why i push
            myself everyday for learning something.I am always energetic and
            eager to learn new skills.I use a creative approach to problem
            solve.I trust on mine one day i will a boss of programming.
          </p>
          <div className="phone-email">
            <p>Email:sajalhowlader08@gmail.com</p>
            <p>Phone:01571117363</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
