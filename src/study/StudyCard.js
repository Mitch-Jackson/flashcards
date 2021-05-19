import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function StudyCard({ cardsInDeck }) {
    const history = useHistory();
    
    const [index, setIndex] = useState(0)
    const [isFlipped, setIsFlipped] = useState(false);
    
    
    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }

    const handleNext = () => {
        if (index < cardsInDeck.length - 1) {
            setIndex(i => i = i + 1);
            setIsFlipped(false);
        } else {
            const resetStudy = window.confirm("Restart cards?\n\nClick 'cancel' to return to the home page");
            if (resetStudy) {
                setIndex(0);
                setIsFlipped(false);
            } else if (resetStudy === false) {
                history.push("/")
            }
        }
    }
    if (!cardsInDeck) {
        return <p>Loading...</p>
    }
    
        return (
            <div className="card border-dark w-75" style={{ margin: "10px" }}>
                <div className="card-body">
                    <h5 className="text-muted">Card {index + 1} of {cardsInDeck.length}</h5>
                    <br />
                    <h3 className="text-center text-info"> {isFlipped ? cardsInDeck[index].back : cardsInDeck[index].front} </h3>
                    <button className="btn btn-secondary mr-2" onClick={handleFlip}>Flip</button>
                    {isFlipped ? <button className="btn btn-info" onClick={() => handleNext()}>Next</button> : null}
                </div>
            </div>
        )
    
}

export default StudyCard;