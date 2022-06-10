import emailjs from "emailjs-com";
import { useRef } from "react";
import { toast } from "react-toastify";
import cimg from "../../images/5124556-removebg-preview.png";
const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };
    console.log(templateParams);

    emailjs
      .send(
        "service_g0zvsp6",
        "template_fkyrk1r",
        templateParams,
        "nngDj1x_LH11XCisx"
      )
      .then(
        function (response) {
          toast.success("Send Success");
        },
        function (error) {
          console.log("Failed try again");
        }
      );
  };
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
        <form ref={form} onSubmit={sendEmail} className="contact-info">
          <div className="input-one">
            <div>
              <p htmlFor="">Your Name</p>
              <input name="name" type="text" placeholder="Your Name" />
            </div>
            <div>
              <p htmlFor="">Your Name</p>
              <input name="email" type="Email" placeholder="Your Email" />
            </div>
          </div>
          <p>Your Message</p>
          <textarea name="message" placeholder="Your Message"></textarea>
          <input className="text-submit" type="submit" value="Send Me" />
        </form>
      </div>
    </section>
  );
};

export default Contacts;
