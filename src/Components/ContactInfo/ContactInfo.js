import "./ContactInfo.css";
import emailUrl from "images/email.webp"
import linkedinUrl from "images/linkedin.webp"
import instagramUrl from "images/instagram.webp"
import githubUrl from "images/github.webp"
import SocialMediaData from "data/data.json"

const ContactInfo = () => {
  return (
    <div className="mainContainer">
      <div className="contactInfoBox"></div>
      <div className=" contactContent">
          {/* <div className="center firstContactContent"> */}
               <a className="first" href= {`mailto:${SocialMediaData.socialMediaLink.email}`} target= "_blank" rel="noreferrer"><img src= {emailUrl} alt = "email logo"/> <span className="displayToggle">Email</span></a>
               <a href={SocialMediaData.socialMediaLink.instagram} target= "_blank" rel="noreferrer"><img src= {instagramUrl} alt = "instagram logo"/> <span className="displayToggle">Instagram</span></a>
          {/* </div> */}
          {/* <div className="center secondContactContent"> */}
                <a className="first" href={SocialMediaData.socialMediaLink.github}target="_blank" rel="noreferrer"><img src= {githubUrl} alt = "github logo"/> <span className="displayToggle">Github</span></a>
                <a href={SocialMediaData.socialMediaLink.linkedin} target= "_blank" rel="noreferrer"><img src= {linkedinUrl} alt = "linkedin logo"/> <span className="displayToggle">Linkedin</span></a>
          {/* </div> */}
      </div>
    </div>
  );
};

export default ContactInfo;
