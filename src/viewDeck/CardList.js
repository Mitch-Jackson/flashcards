import React from "react";
import { useHistory, Link } from "react-router-dom";
import { deleteCard } from "../utils/api/index";
import Card from "./Card";


function CardList({deck}) {
    const { cards = [] } = deck;
    const history = useHistory();

    const handleDelete = async (card) => {
            const confirmDelete = window.confirm("Delete this card?\nYou will not be able to recover it.");
            
            if (confirmDelete) {
                await deleteCard(card.id);
                history.go(0);
            }
    }
    
    const cardHtml = cards.map(card => {
        return (
            <div key={card.id}>
                <Card card={card} deck={deck} handleDelete={handleDelete} />
            </div>
        )
    });

    return (
        <div>
            <h3>Cards</h3>
            {cardHtml}
            <Link to={`/decks/${deck.id}/cards/new`}>
                    <button className="btn btn-success mt-2 mb-5">+ Add Card</button>
            </Link>
        </div>
    )
}

export default CardList;