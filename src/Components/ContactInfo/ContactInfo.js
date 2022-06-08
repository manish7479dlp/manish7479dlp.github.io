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
               <a className="first" href= {`mailto:${SocialMediaData.socialMediaLink.email}`} target= "_blank" rel="noreferrer"><img src= {emailUrl} alt = "email logo"/> Email</a>
               <a href={SocialMediaData.socialMediaLink.instagram} target= "_blank" rel="noreferrer"><img src= {instagramUrl} alt = "instagram logo"/> Instagram</a>
          {/* </div> */}
          {/* <div className="center secondContactContent"> */}
                <a className="first" href={SocialMediaData.socialMediaLink.github}target="_blank" rel="noreferrer"><img src= {githubUrl} alt = "github logo"/> Github</a>
                <a href={SocialMediaData.socialMediaLink.linkedin} target= "_blank" rel="noreferrer"><img src= {linkedinUrl} alt = "linkedin logo"/> Linkedin</a>
          {/* </div> */}
      </div>
    </div>
  );
};

export default ContactInfo;
