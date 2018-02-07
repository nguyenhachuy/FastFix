import React from 'react';

import API from "../utils/API";


const CreateJobForm = props => {

    return (

    <form className="jobCreation">
    <div className="form-group">
      <label htmlFor="jobs">Search:</label>
      <input
        name="jobTitle"
        onChange={props.handleInputChange}
        type="text"
        className="form-control"
        placeholder="Enter Job Title"
        id="jobTitle"
        />
      <br />
      <button 
        type="submit"
        onClick={props.handleJobCreation}
        className="btn btn-primary">
        Submit Job
      </button>
      </div>
      </form>
    )
}

export default CreateJobForm;