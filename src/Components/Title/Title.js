import "./Title.css";

const Title = ({ imgStyle, titleContainerStyle, title, imgUrl }) => {
  return (
    <div className="mainContainer">
      <div className="iconContainer" style={imgStyle}>
        <img src={imgUrl} alt="icon" />
      </div>
      <div style={titleContainerStyle} className="titleContainer"></div>
      <h1 className="titleContent">{title}</h1>
    </div>
  );
};

export default Title;
