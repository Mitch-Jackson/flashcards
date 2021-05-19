import React from "react";
import { Link } from "react-router-dom";
import DeckList from "./DeckList"

function Home() {

    return (
        <div>
            <Link to='/decks/new'>
                <button className='btn btn-primary btn-lg'> + Create Deck</button>
            </Link>
            <DeckList />
        </div>
    )
}

export default Home;