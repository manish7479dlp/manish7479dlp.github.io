import Education from "Components/Education/Education";
import Project from "Components/Project/Project";
import Skills from "Components/Skills/Skills";
import "./RightContentCollection.css";
import Hobbies from "Components/Hobbies/Hobbies";

const RightContentCollection = ({ Data }) => {
  return (
    <div className="mainContainer">
      <div className="center rightContentCollection">
        <Education Data={Data} />
        <Hobbies Data={Data} />
        <Skills Data={Data} />
        <Project Data={Data} />
      </div>
    </div>
  );
};

export default RightContentCollection;
