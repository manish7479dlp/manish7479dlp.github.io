import "./Education.css";
import Title from "Components/Title/Title";
import EducationContent from "data/data.json";


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
        <strong>School Name: </strong>{EducationContent.education.secondaryEducation[0].schoolName}
        <br />
        <strong>Marks: </strong>{EducationContent.education.secondaryEducation[1].marks}
        <strong className="percentage">Percentage: </strong>{EducationContent.education.secondaryEducation[2].percentage}%
      </div>
      <div className="educationDetails">
        <h3>Higher Secondary Education:</h3>
        <strong>College Name: </strong>{EducationContent.education.higherSecondaryEducation[0].collegeName}
        <br />
        <strong>Marks: </strong>{EducationContent.education.higherSecondaryEducation[1].marks}
        <strong className="percentage">Percentage: </strong>{EducationContent.education.higherSecondaryEducation[2].percentage}%
      </div>
    </div>
  );
};

export default Education;
