import React from 'react';

const CreateJobForm = props => {

    return (

    <form className="jobCreation">
    <div className="form-group">
      <label htmlFor="jobs">Create New Job:</label>
      <input
        name="jobTitle"
        onChange={props.handleInputChange}
        type="text"
        className="form-control"
        placeholder="Enter Job Title"
        id="jobTitle"
        />
      <br />
      <input
        name="zipCode"
        onChange={props.handleInputChange}
        type="text"
        className="form-control"
        placeholder="Enter Zipcode"
        id="zipCode"
        />
      <br />
      <input
        name="budget"
        onChange={props.handleInputChange}
        type="text"
        className="form-control"
        placeholder="Enter Your Budget"
        id="budget"
        />
      <br />
      <input
        name="timeFrame"
        onChange={props.handleInputChange}
        type="text"
        className="form-control"
        placeholder="Must Be Completed By"
        id="timeFrame"
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