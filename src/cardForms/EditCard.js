import React, { useEffect, useState } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../utils/api/index";
import CardForm from "./CardForm";


function EditCard() {
    const { deckId, cardId } = useParams();
    const history = useHistory();

    const [formData, setFormData] = useState({});
    const [deck, setDeck] = useState({});

    useEffect( () => {
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal).then(setDeck);
        readCard(cardId, abortController.signal).then(setFormData);

        return () => abortController.abort();
    }, [deckId, cardId]);

  

    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateCard(formData);
        history.push(`/decks/${deckId}`);
    }

    const cancel =
        (
            <Link to={`/decks/${deckId}`}>
                 <button className="btn btn-secondary mr-2">
                     Cancel
                 </button>
            </Link>
        )
    

    
    
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
                            Edit Card {cardId}
                        </li>
                    </ol>
                </nav>
            <h2>Edit Card</h2>
            <br />
            <CardForm setFormData={setFormData} formData={formData} handleSubmit={handleSubmit} back={cancel} />
        </div>
    )
}

export default EditCard;