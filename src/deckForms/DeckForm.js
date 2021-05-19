import React from "react";

function DeckForm({ handleChange, deck }) {
    /*
    The differences in displaying the form is in regards to the data given to it.
    If given deck data one knows that there is data to edit.
    If not then one knows that a deck is to be created.
    Because of this boolean conditional, logic can be created to set function pointers and paths
    to provide correct functionality.
    Example:
        (deck) ? button.text = 'edit' : 'create';
        (deck) ? path = 'api/edit' : 'api/create';
        fetch(path).then(...);
    */
    return (
        <div className="form-group">
                    <div className="row">
                        <label htmlFor="name" className="col-form-label"> Deck Name: </label>
                        <div className="col">
                            <input
                                id="name"
                                type="text"
                                name="name"
                                className="form-control"
                                onChange={handleChange}
                                value={deck.name}
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <label htmlFor="description" className="col-form-label">Description: </label>
                        <div className="col">
                            <textarea
                                className="form-control"
                                id="description"
                                name="description"
                                rows="5"
                                onChange={handleChange}
                                value={deck.description}
                            />
                        </div>
                    </div>
                </div>
    )
}

export default DeckForm;