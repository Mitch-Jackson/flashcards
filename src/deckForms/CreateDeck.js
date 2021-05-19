import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../utils/api/index";
import DeckForm from "./DeckForm"

/*
 The Create Deck screen has the following features:
    The path to this screen should be /decks/new.
        x There is a breadcrumb navigation bar with a link to home / followed by the text Create Deck (i.e., Home/Create Deck).
            - A form is shown with the appropriate fields for creating a new deck.
            - The name field is an <input> field of type text.
            - The description field is a <textarea> field that can be multiple lines of text.
            -  If the user clicks "submit", the user is taken to the Deck screen.
            - If the user clicks "cancel", the user is taken to the Home screen.
*/

function CreateDeck() {
    const history = useHistory();
    const initialForm = {
        name: '',
        description: ''
    }
    const [newDeck, setNewDeck] = useState({...initialForm});

    const handleChange = ({target}) => {
        setNewDeck({ ...newDeck, [target.name]: target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const addDeck = await createDeck(newDeck);
        history.push(`/decks/${addDeck.id}`);
    }

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Create Deck
                    </li>
                </ol>
                
            </nav>
            <h2>Create Deck</h2>
            <br />
            <form onSubmit={handleSubmit}>
                <DeckForm deck={newDeck} handleChange={handleChange} />
                <div className="float-right">
                    <Link to="/">
                        <button className="btn btn-secondary mr-2">
                            Cancel
                        </button>
                    </Link>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateDeck;