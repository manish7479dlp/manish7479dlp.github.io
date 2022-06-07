import "./Education.css";
import Title from "Components/Title/Title";

const Education = (props) => {
  const { imgUrl, title, imgStyle, titleContainerStyle } = props.Data.education;
  return (
    <div className="profileContainer educationContainer">
      <Title
        imgUrl={imgUrl}
        title={title}
        imgStyle={imgStyle}
        titleContainerStyle={titleContainerStyle}
      />

      <div className="educationDetails first">
        <h3>Secondary Education:</h3>
        <strong>School Name: </strong>Shiksha Niketan Public School.
        <br />
        <strong>Marks: </strong>308
        <strong className="percentage">Percentage: </strong>61.6%
      </div>
      <div className="educationDetails">
        <h3>Secondary Education:</h3>
        <strong>School Name: </strong>Deo Chand College Hajipur.
        <br />
        <strong>Marks: </strong>370
        <strong className="percentage">Percentage: </strong>74%
      </div>
    </div>
  );
};

export default Education;
