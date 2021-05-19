import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../home/Home";
import Study from "../study/Study";
import EditDeck from "../deckForms/EditDeck";
import ViewDeck from "../viewDeck/ViewDeck";
import EditCard from "../cardForms/EditCard";
import AddCard from "../cardForms/AddCard";
import CreateDeck from "../deckForms/CreateDeck";

function Layout() {

  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
            <Route path="/decks/new">
              <CreateDeck />
            </Route>
            <Route path="/decks/:deckId/study">
              <Study />
            </Route>
            <Route path="/decks/:deckId/edit">
              <EditDeck />
            </Route>
            <Route path="/decks/:deckId/cards/new">
              <AddCard />
            </Route>
            <Route path="/decks/:deckId/cards/:cardId/edit">
              <EditCard />
            </Route>
            <Route path="/decks/:deckId">
              <ViewDeck />
            </Route>
            <Route exact={true} path="/">
              <Home />
            </Route>
            <Route>
              <NotFound />
            </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
