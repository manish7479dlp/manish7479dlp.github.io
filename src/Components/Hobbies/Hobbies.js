import "./Hobbies.css";
import Title from "Components/Title/Title";
import HobbiesData from "data/data.json"

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
         {
           HobbiesData.hobbies.map((elm , idx) => {
             return <li key={idx}>{elm}</li>
           })
         }
      </ul>
    </div>
  );
};

export default Hobbies;
