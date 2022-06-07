import "./Skills.css";
import Title from "../Title/Title";

const Skills = (props) => {
  const { imgUrl, title, imgStyle, titleContainerStyle } = props.Data.skills;
  const skills = [
    "C",
    "C++",
    "Java",
    "DSA",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Reactjs",
    "Nodejs",
    "Expressjs",
    "Mongodb",
    "Github",
  ];
  return (
    <div className="skillsContainer educationContainer profileContainer">
      <Title
        imgUrl={imgUrl}
        title={title}
        imgStyle={imgStyle}
        titleContainerStyle={titleContainerStyle}
      />
      <div className="skills">
        {skills.map((elm, idx) => (
          <p key={idx}>{elm}</p>
        ))}
      </div>
    </div>
  );
};

export default Skills;
