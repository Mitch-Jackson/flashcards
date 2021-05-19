import React from "react";
import { Link } from "react-router-dom";

function Deck({ deck, handleDelete }) {
    
    return (
        <div className="card border-dark w-75" style={{ margin: "10px" }}  key={deck.id}>
                <div className="card-body">
                    <h3 className="card-title">
                        {deck.name}
                        <button className="btn btn-danger float-right" onClick={() => handleDelete(deck.id)}>Delete</button>
                    </h3>
                    <p className="card-text">
                    <i>{deck.cards.length} cards</i>
                    <br />
                        {deck.description}
                    </p>
                    <Link to={`/decks/${deck.id}/study`}><button className="btn btn-secondary mr-2">Study</button></Link>
                    <Link to={`/decks/${deck.id}`}><button className="btn btn-info">View</button></Link>
                </div>
            </div>
    )


}

export default Deck