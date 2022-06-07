import "./Language.css";
import Title from "../Title/Title"

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
          <li>Hindi</li>
          <li>English</li>
          <li>Maghhi</li>
          <li>Bhojpuri</li>
      </ul>
      </div>
    </>
  );
};

export default Language;
