import React from "react";
import cimg from '../../images/5124556-removebg-preview.png'
const Contacts = () => {
  return (
    <section className="px-5 my-5">
      <div className="title">
        <h1>Contact With Me</h1>
        <p className="c-one"></p>
        <p className="c-two"></p>
      </div>
      <div className="contact-container">
        <div className="contact-img">
            <img src={cimg} alt="" />
        </div>
        <div className="contact-info">
          <div className="input-one">
            <div>
              <p htmlFor="">Your Name</p>
              <input type="text" placeholder="Your Name" />
            </div>
            <div>
              <p htmlFor="">Your Name</p>
              <input type="Email" placeholder="Your Email" />
            </div>
          </div>
          <p>Your Message</p>
          <textarea placeholder="Your Message"></textarea>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
