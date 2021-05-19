import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import StudyCard from "./StudyCard";
import NotEnoughCards from "./NotEnoughCards";

/*
 The Study screen has the following features:
    xx The path to this screen should include the deckId (i.e., /decks/:deckId/study).
    xx There is a breadcrumb navigation bar with links to home /, followed by the name of the deck being studied and finally the text Study (e.g., Home/Rendering In React/Study).
    xx The deck title (i.e., "Study: Rendering in React" ) is shown on the screen.
    - Cards are shown one at a time, front-side first.
    - A button at the bottom of each card "flips" it to the other side.
    - After flipping the card, the screen shows a next button to continue to the next card.
        - The next button appears after the card is flipped.
    - After the final card in the deck has been shown, a message is shown offering the user the opportunity to restart the deck.
        -  If the user does not restart the deck, they return to the home screen.
    - If the user does not restart the deck, they should return to the home screen.
    - Studying a deck with two or fewer cards should display a "Not enough cards" message and a button to add cards to the deck.
        - Clicking the "Add Cards" button should take the user to the Add Card screen.
*/

function Study() {
    const { deckId } = useParams();
    const [deck, setDeck] = useState({});
    
    useEffect(() => {
        const loadDeck = async () => {
          const loadedDeck = await readDeck(deckId);
          setDeck(() => loadedDeck);
        };
        loadDeck();
    }, [deckId]);
    

    if (!deck.cards) {
        return <p>Loading...</p>
    }
    
    return (
        <div>
             <nav aria-label='breadcrumb'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item text-primary">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="breadcrumb-item text-primary">
                            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current='page'>
                            Study
                        </li>
                    </ol>
                </nav>
            <h2>Study: {deck.name}</h2>
            <br />
            {deck.cards.length >= 3 
                    ? <StudyCard cardsInDeck={deck.cards} /> 
                    : <NotEnoughCards deckId={deckId} cardsInDeck={deck.cards} />
            }
        </div>
    )
}

export default Study;