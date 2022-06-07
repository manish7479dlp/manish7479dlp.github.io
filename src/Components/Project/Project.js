import "./Project.css";
import Title from "Components/Title/Title";

const Project = (props) => {
  const { imgUrl, title, imgStyle, titleContainerStyle } = props.Data.project;
  return (
    <div className="projectContainer educationContainer profileContainer">
      <Title
        imgUrl={imgUrl}
        title={title}
        imgStyle={imgStyle}
        titleContainerStyle={titleContainerStyle}
      />
      <div className="projectNameContainer">
        <div>
          <p className="aboutProject">
            <strong>GreatUse: </strong>It's a Question With Answer Containing
            Website. In Which Begineer to Advance Level of Question is Present
            in Systematic Manner.
          </p>
          <strong>Url: </strong>
          <a href="https://manish.is-a.dev/greatuse/" target="_blank"  rel="noreferrer" >
            https://manish.is-a.dev/greatuse/
          </a>
        </div>

        <div>
          <p className="aboutProject">
            <strong>Mcet-Exam: </strong>It's a Online Exam Taking Website.
          </p>
          <strong>Url: </strong>
          <a href="https://mcet-exam.up.railway.app" target="_blank"  rel="noreferrer" >
            https://mcet-exam.up.railway.app/
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
