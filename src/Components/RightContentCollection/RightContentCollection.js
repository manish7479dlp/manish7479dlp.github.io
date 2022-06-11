import Education from "Components/Education/Education";
import Project from "Components/Project/Project";
import Skills from "Components/Skills/Skills";
import "./RightContentCollection.css";
import Hobbies from "Components/Hobbies/Hobbies";

const RightContentCollection = ({ Data }) => {
  return (
    <div className="mainContainer">
      <div className="center rightContentCollection">
        <div>
          <Education Data={Data} />
        </div>
        <div>
          <Hobbies Data={Data} />
        </div>
        <div>
          <Skills Data={Data} />
        </div>
        <div>
          <Project Data={Data} />
        </div>
      </div>
    </div>
  );
};

export default RightContentCollection;
