import "./Profile.css";
import Title from "../Title/Title";
import ProfileContent from "data/data.json";

const Profile = (props) => {
  const { imgUrl, title, imgStyle, titleContainerStyle } = props.Data.profile;
  return (
    <>
      <div className="profileContainer">
        <Title
          imgUrl={imgUrl}
          title={title}
          imgStyle={imgStyle}
          titleContainerStyle={titleContainerStyle}
        />
        <p className="profileContent">
          <strong>Hey</strong>, {ProfileContent.profileContent.about}{" "}
        </p>
      </div>
    </>
  );
};

export default Profile;
