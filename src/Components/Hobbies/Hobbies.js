import "./Hobbies.css";
import Title from "Components/Title/Title";

const Hobbies = (props) => {
  const { imgUrl, title, imgStyle, titleContainerStyle } = props.Data.hobbies;
  return (
    <div className="hobbiesContainer educationContainer profileContainer">
      <Title
        imgUrl={imgUrl}
        title={title}
        imgStyle={imgStyle}
        titleContainerStyle={titleContainerStyle}
      />
      <ul>
        <li>Travelling</li>
        <li>Listening Music</li>
        <li>Playing Cricket</li>
        <li>Learning about new Technology</li>
      </ul>
    </div>
  );
};

export default Hobbies;
