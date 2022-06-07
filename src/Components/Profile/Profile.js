import "./Profile.css";
import Title from "../Title/Title"

const Profile = (props) => {
   const {imgUrl, title, imgStyle, titleContainerStyle } = props.Data.profile
    // console.log(title);
  return (
    <>
      <div className="profileContainer">
        <Title
          imgUrl={imgUrl}
          title={title}
          imgStyle={imgStyle}
          titleContainerStyle={titleContainerStyle}
        />
        <p className="profileContent"><strong>Hey</strong>, I am Manish Kumar. I am a Computer Science and Engineering 2<sup>nd</sup> Year Student of Murshidabad College of Engineering and Technology. Intresting Thing about me is that I am very Curious about Learning New Technology.</p>
      </div>
    </>
  );
};

export default Profile;
