import React, { useState }from "react";
import "./Card.css"


function Card() {
     
    const [cardSide, setCardSide] = useState("0");
    
   
    return( 
        <>
        <div className="card container center" >
            <div className="front content" rotate = {cardSide}>
                <h1>This is front-side</h1>
            </div>
            <div className="back content" rotate = {cardSide}>
                <h1>This is back-side</h1>
            </div>
        </div>
        <div className="cards-navigation center">
            <button>❌</button>
            <button onClick={() => {setCardSide(cardSide === '0' || cardSide ==='2' ? '1' : '2')}}>⭮</button>
            <button>✔️</button>
            
        </div>
        </>
    )
}

export default Card;