import Title from "Components/Title/Title";
import React from "react";
import profileImgUrl from "images/image.webp";

const contentData = {
  profile: {
    profileImgUrl,
    title: "Profile",
    imgStyle: {
      background: "linear-gradient(48deg, rgb(220, 72, 155), rgb(243, 248, 7))",
    },
    titleContainerStyle: {
      border: "3px solid rgb(184, 183, 183)",
      background: "linear-gradient(to right ,rgb(243,248,7) , rgb(220,72,155))",
    }
  },
};

const App = () => {
  
  const { profileImgUrl, title, imgStyle, titleContainerStyle } =
    contentData.profile;
  return (
    <>
      <Title
        // title={"Profile"}
        imgUrl={profileImgUrl}
        title ={title}
        imgStyle={imgStyle}
        titleContainerStyle={titleContainerStyle}
      />
      {/* <Title title={"Skills"} />
      <Title title={"Language"} /> */}
    </>
  );
};

export default App;
