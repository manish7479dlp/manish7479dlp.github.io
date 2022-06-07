import "./ContactInfo.css";
import emailUrl from "images/email.webp"
import linkedinUrl from "images/linkedin.webp"
import instagramUrl from "images/instagram.webp"
import githubUrl from "images/github.webp"

const ContactInfo = () => {
  return (
    <div className="mainContainer">
      <div className="contactInfoBox"></div>
      <div className=" contactContent">
          {/* <div className="center firstContactContent"> */}
               <a className="first" href="mailto:manish7479dlp@gmail.com" target= "_blank"><img src= {emailUrl} alt = "email logo"/> Email</a>
               <a href="https://www.instagram.com/manish7479dp/" target= "_blank"><img src= {instagramUrl} alt = "instagram logo"/> Instagram</a>
          {/* </div> */}
          {/* <div className="center secondContactContent"> */}
                <a className="first" href="https://github.com/manish7479dlp" target="_blank"><img src= {githubUrl} alt = "github logo"/> Github</a>
                <a href="https://www.linkedin.com/in/manish-kumar-6aa8841a6/" target= "_blank"><img src= {linkedinUrl} alt = "linkedin logo"/> Linkedin</a>
          {/* </div> */}
      </div>
    </div>
  );
};

export default ContactInfo;
