import React, {useState, useEffect} from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { deleteDeck, readDeck } from "../utils/api/index";
import CardList from "./CardList"

/*
 The Deck screen has the following features:
    x The path to this screen should include the deckId (i.e., /decks/:deckId).
    x There is a breadcrumb navigation bar with a link to home / followed by the name of the deck (e.g., Home/React Router).
    x The screen includes the deck name (e.g., "React Router") and deck description (e.g., "React Router is a collection of navigational components that compose declaratively in your application").
    x The screen includes "Edit", "Study", "Add Cards", and "Delete" buttons. Each button takes the user to a different destination, as follows:
        | "Edit" | Edit Deck Screen |
        | "Study" | Study screen |
        | "Add Cards" | Add Card screen |
        | "Delete" | Shows a warning message before deleting the deck]
            When the user clicks the "Delete" button associated with a card, a warning message is shown and the user can click "OK" or "Cancel". If the user clicks "OK", the card is deleted.
    - Each card in the deck:
        - is listed on the page under the "Cards" heading.
        - shows a question and the answer to the question.
        - has an “Edit” button that takes the user to the Edit - Card screen when clicked.
        - has a “Delete” button that allows that card to be deleted.
*/

function ViewDeck() {
    const { deckId } = useParams();
    const history = useHistory();

    const [deck, setDeck] = useState({});
    
    useEffect(() => {
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal).then(setDeck);

        return () => abortController.abort();
    }, [deckId]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Delete this deck?\nYou will not be able to recover it.");
        console.log("Deleting Deck", deck.id)
        if (confirmDelete) {
            await deleteDeck(deck.id);
            history.push('/');
        }
    }



    if (!deck.id) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <nav aria-label='breadcrumb'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item text-primary"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current='page'>{deck.name}</li>
                </ol>
            </nav>
            <h2>
                {deck.name}
                <button className="btn btn-danger float-right" onClick={handleDelete}>Delete</button>
            </h2>
            <p>{deck.description}</p> 
            <Link to={`/decks/${deck.id}/edit`}>
                <button className="btn btn-primary mr-2 mb-2">Edit</button>
            </Link>
            <Link to={`/decks/${deck.id}/study`}>
                <button className="btn btn-secondary mr-2 mb-2">Study</button>
            </Link>
            <br /><br />
            <CardList deck={deck} />
        </div>
    )
}

export default ViewDeck;