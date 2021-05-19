import React from "react";
import { Link } from "react-router-dom";

function NotEnoughCards({ cardsInDeck, deckId }) {
    if (!cardsInDeck) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <h3>Not enough cards.</h3>
            <p>You need at least 3 cards to study. There are {cardsInDeck.length} cards in this deck.</p>
            <Link to={`/decks/${deckId}/cards/new`}>
                <button className="btn btn-success mt-2 mb-5">+ Add Card</button>
        </Link>
        </div>
    )
}

export default NotEnoughCards;