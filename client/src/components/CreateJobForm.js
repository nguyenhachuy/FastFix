import React from 'react';

class CreateJobForm extends React.Component{

  state = {
    newJob: {}
  };

    constructor(props){
      super(props);
    };

    render() {
    return (

    <form className="jobCreation">
    <div className="form-group">
      <label htmlFor="jobs">Create New Job:</label>
      <input
        name="jobTitle"
        onChange={this._handleInputChange}
        type="text"
        className="form-control"
        placeholder="Enter Job Title"
        id="jobTitle"
        />
      <br />
      <input
        name="zipCode"
        onChange={this._handleInputChange}
        type="text"
        className="form-control"
        placeholder="Enter Zipcode"
        id="zipCode"
        />
      <br />
      <input
        name="budget"
        onChange={this._handleInputChange}
        type="text"
        className="form-control"
        placeholder="Enter Your Budget"
        id="budget"
        />
      <br />
      <input
        name="timeFrame"
        onChange={this._handleInputChange}
        type="text"
        className="form-control"
        placeholder="Must Be Completed By"
        id="timeFrame"
        />
      <br />
      <button 
        type="submit"
        onClick={this._handleJobCreation}
        className="btn btn-primary">
        Submit Job
      </button>
      </div>
      </form>
    )
  }
};

export default CreateJobForm;