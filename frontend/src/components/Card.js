import React, { useState }from "react";
import "./Card.css"


function Card() {
     
    const [degress, setState] = useState(0);
    
   const rotateStyles = []
    return( 
        <>
        <div className="card container center">
            <div className="front content">
                <h1>This is front-side</h1>
            </div>
            <div className="back content" >
                <h1>This is back-side</h1>
            </div>
        </div>
        <div className="cards-navigation center">
            <button>❌</button>
            <button onClick={()=>{
               
                
            }}>⭮</button>
            <button>✔️</button>
            
        </div>
        </>
    )
}

export default Card;