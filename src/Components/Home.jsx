import React from "react";
import imgLink from './Image.jpg'

// import './Image/pic.jpg'

const Home = () =>{
    return(
        <>    
            <div className="rCircle"></div>          
            <div className="lCircle"></div>          
            <div className="mainSection">
                <div className="imgSection">
                    <img src = {imgLink} alt="Avtar" />
                </div>
                <div className="detailSection">
                        
                        
              <p> Hey, I am <span className="name">Manish Kumar</span> I am Currently Studing in Murshidabad College Of Engineering and Technology in The Department of Computer Science and Engineering in 2<sup>nd</sup> year. Intresting Thing About me is that I am very Curious About Learning new Technlogy..</p>

                </div>
            </div>
        </>
    )
}

export default Home;