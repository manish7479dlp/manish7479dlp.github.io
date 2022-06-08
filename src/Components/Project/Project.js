import "./Project.css";
import Title from "Components/Title/Title";
import ProjectData from "data/data.json"

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
         {
           ProjectData.project.map((elm , idx) => {
             return (
              <div key={idx}>
              <p className="aboutProject">
                <strong>{elm.name}: </strong>{elm.aboutProject}
              </p>
              <strong>Url: </strong>
              <a href={elm.url} target="_blank"  rel="noreferrer" >
                {elm.url}
              </a>
            </div>
             )
           })
         }

       
      </div>
    </div>
  );
};

export default Project;
