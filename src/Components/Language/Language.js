import "./Language.css";
import Title from "../Title/Title"
import LanguageContent from "data/data.json";


const Language = (props) => {
   const {imgUrl, title, imgStyle, titleContainerStyle } = props.Data.language

  return (
    <>
      <div className="languageContainer profileContainer">
      <Title
        imgUrl={imgUrl}
        title={title}
        imgStyle={imgStyle}
        titleContainerStyle={titleContainerStyle}
      />
      <ul>
          {
            LanguageContent.language.map((elm , idx) => {
              return (
                <li key={idx}>{elm.name}</li>
              )
            })
          }
      </ul>
      </div>
    </>
  );
};

export default Language;
