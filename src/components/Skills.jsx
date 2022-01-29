import Skill from "./Skill.jsx";
import data from "data/data.json";

const Skills = () => {
  const skills = data.skills.map((s, i) => <Skill key={i} name={s.name} />);

  return (
    <>
      <h1 className="heading">My Skills</h1>
      <div className="mainBody">
        <div className="container">{skills}</div>
      </div>
    </>
  );
};

export default Skills;
