import React from "react";
import { Link } from "react-router-dom";

function Card({card, deck, handleDelete}) {

    return (
        <div className="card border-dark mt-3 w-75">
                <div className="card-body">
                    <div className="row">
                        <p className="col">{card.front}</p>
                        <p className="col">{card.back}</p>
                    </div>
                    <div className="float-right">
                    <Link to={`/decks/${deck.id}/cards/${card.id}/edit`}>
                        <button className="btn btn-secondary mr-2">
                            Edit
                        </button>
                    </Link>
                        <button className="btn btn-danger" onClick={() => handleDelete(card)}>Delete</button>
                    </div>
                </div>
            </div>
    )

}

export default Card