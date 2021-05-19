import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api/index";
import CardForm from "./CardForm";

/*
 The Add Card screen has the following features:
    - The path to this screen should include the deckId (i.e., /decks/:deckId/cards/new).
    - There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck to which the cards are being added, and finally the text Add Card (e.g., Home/React Router/Add Card).
    - The screen displays the "React Router: Add Card" deck title.
    - A form is shown with the "front" and "back" fields for a new card. Both fields use a <textarea> tag that can accommodate multiple lines of text.
    - If the user clicks "Save", a new card is created and associated with the relevant deck. Then the form is cleared and the process for adding a card is restarted.
    - If the user clicks "Done", the user is taken to the Deck screen.
*/

function AddCard() {
    const { deckId } = useParams();

    const initialForm = {
        front: '',
        back: '',
        deckId: deckId
    }

    const [formData, setFormData] = useState({...initialForm});
    const [deck, setDeck] = useState({});

    useEffect( () => {
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal).then(setDeck);

        return () => abortController.abort();
    }, [deckId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await createCard(deckId, formData);
        setFormData({...initialForm})
        //history.push(`/decks/${deckId}`);
    }

    const done =
        (
            <Link to={`/decks/${deckId}`}>
                <button className="btn btn-secondary mr-2">
                     Done
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
                            Add Card
                        </li>
                    </ol>
                </nav>
            <h2>{deck.name}: Add Card</h2>
            <br />
            <CardForm setFormData={setFormData} formData={formData} handleSubmit={handleSubmit} back={done} />
        </div>
    )
}

export default AddCard;