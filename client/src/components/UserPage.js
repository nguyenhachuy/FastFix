import React from 'react';
import CreateJobForm from './CreateJobForm';
import PendingJobsList from './PendingJobsList';
import InProgressJob from './InProgressJob';

class UserPage extends React.Component{

    constructor(props){
        super(props);
    };

    state = {
        newJob: {}
    };

    _handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
          });          
        };
        
        
        
    _handleJobCreation = event => {
        console.log(this.state.newJob);
            
    };

    render() {

        return(

            <div>

                <CreateJobForm 
                handleInputChange={this._handleInputChange}
                handleJobCreation={this._handleJobCreation}
                />
                <hr />
                <InProgressJob isUser={true}/>
                <hr />
                
                <PendingJobsList />

            </div>

        )
    }

};

export default UserPage;