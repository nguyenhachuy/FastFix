import React from 'react';

const CreateJobForm = props => {

    return (

    <form className="search">
    <div className="form-group">
      <label htmlFor="breeds">Search:</label>
      <input
        name="breed"
        onChange={this._handleInputChange}
        type="text"
        className="form-control"
        placeholder="Search For a Breed"
        id="breed"
        list="breeds"
      />
      <br />
      <button 
        type="submit"
        onClick={this._handleSearch}
        className="btn btn-primary">
        Search
      </button>
      </div>
      </form>
    )
}

export default CreateJobForm;