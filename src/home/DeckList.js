import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck, listDecks } from "../utils/api/index";
import Deck from "./Deck";

function DeckList() {
    const [decks, setDecks] = useState([])
    const history = useHistory();

    useEffect(() => {
        const abortController = new AbortController();
        listDecks(abortController.signal).then(setDecks);

        return () => abortController.abort();
    }, []);

    const handleDelete = async (deckId) => {
        const confirmDelete = window.confirm("Delete this deck?\nYou will not be able to recover it.");
        
        if (confirmDelete) {
            await deleteDeck(deckId);
            history.go(0);
        }
    }

    const deckHtml = decks.map(deck => {
        return (
            <div key={deck.id}>
                <Deck deck={deck} handleDelete={handleDelete} />
            </div>
        )
    });

    return (
        <div key='2000'>
            {deckHtml}
        </div>
    )

}

export default DeckList;