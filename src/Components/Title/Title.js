import "./Title.css";

const Title = ({imgStyle ,titleContainerStyle, title, imgUrl}) => {
  const temp = {
    border: "3px solid rgb(184, 183, 183)",
    background: "linear-gradient(to right ,rgb(243,248,7) , rgb(220,72,155))",
  };

//   console.log("x" , temp);
//   console.log(titleContainerStyle);

  return (
    <>
      <div className="iconContainer" style={imgStyle}>
        <img src={imgUrl} alt="icon" />
      </div>
      <div style={titleContainerStyle} className="titleContainer"></div>
      <h1 className="titleContent">{title}</h1>
    </>
  );
};

export default Title;
