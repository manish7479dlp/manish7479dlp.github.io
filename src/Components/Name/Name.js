import "./Name.css";
import portfolioHolderName from "data/data.json"

const Name = () => {
  return (
    <div className="mainContainer">
      <div className="nameContainer"></div>
      <div className="name">
        <h1>{portfolioHolderName.portfolioHolderName.name}</h1>
        <div className="underline"></div>
      </div>
    </div>
  );
};

export default Name;
