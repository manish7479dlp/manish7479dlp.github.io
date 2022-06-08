import "./Skills.css";
import Title from "../Title/Title";
import SkillsData from "data/data.json";


const Skills = (props) => {
  const { imgUrl, title, imgStyle, titleContainerStyle } = props.Data.skills;
  // const skills = [
  
  // ];
  return (
    <div className="skillsContainer educationContainer profileContainer">
      <Title
        imgUrl={imgUrl}
        title={title}
        imgStyle={imgStyle}
        titleContainerStyle={titleContainerStyle}
      />
      <div className="skills">
        {SkillsData.skills.map((elm, idx) => (
          <p key={idx}>{elm}</p>
        ))}
      </div>
    </div>
  );
};

export default Skills;
