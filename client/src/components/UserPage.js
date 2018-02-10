import React from 'react';
import CreateJobForm from './CreateJobForm';
import PendingJobsList from './PendingJobsList';
import InProgressJob from './InProgressJob';
import API from '../utils/API';
class UserPage extends React.Component{

    constructor(props){
        super(props);
    };

    state = {
        jobTitle: '',
        zipCode: '',
        budget: '',
        timeFrame: ''
    };


    componentDidMount() {
        console.log("butt");
        API.getAllTasks()
            .then(res => this.setState({availableJobs: res.data}) , console.log(this.state))
            .catch(err => console.log(err));
    };    

    _handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
          });          
          console.log(this.state);
        };
        
    _handleJobCreation = event => {
        alert(this.state.newJob);
        event.preventDefault();
            
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