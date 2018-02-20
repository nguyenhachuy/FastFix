import React from 'react';

const CreateJobForm = props => {




  
    return (

    <form className="jobCreation">
    <div className="form-group">
      <label htmlFor="jobs">Create New Job:</label>
      <input
        name="jobTitle"
        onChange={props.handleInputChange}
        value={props.jobTitle}
        type="text"
        className="form-control"
        placeholder="Enter Job Title"
        id="jobTitle"
        />
      <br />
      <input
        name="requestDescription"
        onChange={props.handleInputChange}
        value={props.requestDescription}
        type="text"
        className="form-control"
        placeholder="Enter Job Description"
        id="requestDescription"
        />
      <br />
      <input
        name="zipCode"
        onChange={props.handleInputChange}
        value={props.zipCode}
        type="text"
        className="form-control"
        placeholder="Enter Zipcode"
        id="zipCode"
        />
      <br />
      <input
        name="budget"
        onChange={props.handleInputChange}
        value={props.budget}
        type="text"
        className="form-control"
        placeholder="Enter Your Budget"
        id="budget"
        />
      <br />
      {/* <input
        name="timeFrame"
        onChange={props.handleInputChange}
        value={props.timeFrame}
        type="text"
        className="form-control"
        placeholder="Must Be Completed By"
        id="timeFrame"
        />
      <br /> */}
      <button 
        type="submit"
        onClick={props.handleJobCreation}
        className="btn btn-primary">
        Submit Job
      </button>
      </div>
      </form>
    )
  
};

export default CreateJobForm;