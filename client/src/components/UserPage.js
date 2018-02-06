import React from 'react';
import CreateJobForm from './CreateJobForm';
import PendingJobsList from './PendingJobsList';
import InProgressJob from './InProgressJob';

class UserPage extends React.Component{

    constructor(props){
        super(props);
    };

    state = {
        
    };

    _handleInputChange = event => {

    };

    _handleJobCreation = event => {

    };

    render() {

        return(

            <div>

                <CreateJobForm 
                handleInputChange={this._handleInputChange}
                handleJobCreation={this._handleJobCreation}
                />
                <hr />
                <InProgressJob />
                <hr />
                
                <PendingJobsList />
                //HOW DO YOU MAP THROUGH TWO DIFFERENT DBs INTO SAME COMPONENT
            </div>

        )
    }

};

export default UserPage;