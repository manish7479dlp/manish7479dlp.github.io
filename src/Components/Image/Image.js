import "./Image.css"
import myProfileUrl from "images/MyProfile.jpeg"

const Image = () => {
    return (
        <div className="mainContainer">
           <div className="imageContainer"></div>
           <div className="dmImg">
               <img src = {myProfileUrl} alt ="Profile"/>
           </div>
        </div>
    )
}

export default Image;