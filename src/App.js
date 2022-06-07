import "./App.css";
// import Title from "Components/Title/Title";
import React from "react";
import profileImgUrl from "images/profile.webp";
import educationImgUrl from "images/education.webp";
import skillImgUrl from "images/skill.webp";
import experienceImgUrl from "images/experience.webp";
import languageImgUrl from "images/language.webp";
import hobbiesImgUrl from "images/hobbies.webp";
import projectImgUrl from "images/project.webp";
import Name from "Components/Name/Name";
import Image from "Components/Image/Image";
import ContactInfo from "Components/ContactInfo/ContactInfo";
import Heading from "Components/Heading/Heading";
import Profile from "Components/Profile/Profile";
import Language from "Components/Language/Language";
import RightContentCollection from "Components/RightContentCollection/RightContentCollection"

const contentData = {
  profile: {
    imgUrl: profileImgUrl,
    title: "Profile",
    imgStyle: {
      background: "linear-gradient(48deg, rgb(220, 72, 155), rgb(243, 248, 7))",
    },
    titleContainerStyle: {
      border: "3px solid rgb(184, 183, 183)",
      background: "linear-gradient(to right ,rgb(243,248,7) , rgb(220,72,155))",
    },
  },

  education: {
    imgUrl: educationImgUrl,
    title: "Education",
    imgStyle: {
      background: "linear-gradient(48deg, rgb(179,168,48), rgb(12,158,162))",
    },
    titleContainerStyle: {
      border: "3px solid rgb(184, 183, 183)",
      background:
        "linear-gradient(to right ,rgb(12,158,162) , rgb(179,168,48))",
    },
  },

  skills: {
    imgUrl: skillImgUrl,
    title: "Skills",
    imgStyle: {
      background: "linear-gradient(48deg, rgb(42,181,228), rgb(228,90,109))",
    },
    titleContainerStyle: {
      border: "3px solid rgb(184, 183, 183)",
      background:
        "linear-gradient(to right ,rgb(228,90,109) , rgb(42,181,228))",
    },
  },

  experience: {
    imgUrl: experienceImgUrl,
    title: "Experience",
    imgStyle: {
      background: "linear-gradient(48deg, rgb(45,177,231), rgb(58,185,85))",
    },
    titleContainerStyle: {
      border: "3px solid rgb(184, 183, 183)",
      background: "linear-gradient(to right, rgb(58,185,85) , rgb(45,177,231))",
    },
  },

  language: {
    imgUrl: languageImgUrl,
    title: "Language",
    imgStyle: {
      background: "linear-gradient(48deg, rgb(12,75,123), rgb(149,179,81))",
    },
    titleContainerStyle: {
      border: "3px solid rgb(184, 183, 183)",
      background: "linear-gradient(to right, rgb(149,179,81) , rgb(12,75,123))",
    },
  },

  hobbies: {
    imgUrl: hobbiesImgUrl,
    title: "hobbies",
    imgStyle: {
      background: "linear-gradient(48deg, rgb(39,143,175), rgb(39,195,177))",
    },
    titleContainerStyle: {
      border: "3px solid rgb(184, 183, 183)",
      background:
        "linear-gradient(to right, rgb(39,195,177) , rgb(39,143,175))",
    },
  },
  project: {
    imgUrl: projectImgUrl,
    title: "projects",
    imgStyle: {
      // background: "linear-gradient(48deg, rgb(39,143,175), rgb(39,195,177))",
      background: "linear-gradient(48deg, rgb(12,75,123), rgb(149,179,81))",

    },
    titleContainerStyle: {
      border: "3px solid rgb(184, 183, 183)",
      background: "linear-gradient(to right, rgb(58,185,85) , rgb(45,177,231))",
      // background: "linear-gradient(to right, rgb(39,195,177) , rgb(39,143,175))",

    },
  },
};

const App = () => {
  // const { imgUrl, title, imgStyle, titleContainerStyle } =
  //   contentData.education;
  return (
    <div className="container">
      <div className="heading">
        <Image />
        <div className="headingContent">
          <Heading />
          <ContactInfo />
        </div>
      </div>
      <Name/>
      <Profile Data = {contentData}/>
      <Language Data = {contentData}/>
       <RightContentCollection Data = {contentData}/>

      
    </div>
  );
};

export default App;
