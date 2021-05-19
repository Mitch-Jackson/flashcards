import React from "react";


function CardForm({setFormData, formData, handleSubmit, back}) {


    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <div className="row">
                        <label htmlFor="front" className="col-form-label"> Front: </label>
                        <div className="col">
                        <textarea
                                className="form-control"
                                id="front"
                                name="front"
                                rows="5"
                                onChange={handleChange}
                                value={formData.front}
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <label htmlFor="back" className="col-form-label"> Back: </label>
                        <div className="col">
                            <textarea
                                className="form-control"
                                id="back"
                                name="back"
                                rows="5"
                                onChange={handleChange}
                                value={formData.back}
                            />
                        </div>
                </div>
                <div className="float-right mt-2 mb-2">
                    {back}
                <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </div>
        </form>
    )

}

export default CardForm;