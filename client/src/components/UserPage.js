import React from 'react';
import CreateJobForm from './CreateJobForm';
import PendingJobsList from './PendingJobsList';
import InProgressJob from './InProgressJob';
import API from '../utils/API';
class UserPage extends React.Component{



    state = {
        status: 'open',
        user_id: 'TestGuy',
        jobTitle: '',
        jobDescription: '',
        zipCode: '',
        budget: '',
        timeFrame: '',
        openJobs: []
    };


    componentDidMount() {
        this.getUserTasks('TestGuy')
    };    

    getUserTasks = user => {
        //API.getTasksByUserID(user)
        API.getTasksByUserName("Johnny")
            //.then(res => {this.setState({openJobs: res.data})
            //    console.log(this.state.openJobs)})
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
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
        const newTask = this.state;
        console.log(newTask);
        API.createTask(newTask)
        .then(res => {
            this.setState(
                {
                    jobTitle: '',
                    zipCode: '',
                    jobDescription: '',
                    budget: '',
                    timeFrame: ''
                }
            );

        })
        .catch(err => console.log(err));

    event.preventDefault();
            
    };

    render() {

        return(

            <div>

                <CreateJobForm 
                handleInputChange={this._handleInputChange}
                handleJobCreation={this._handleJobCreation}
                budget={this.state.budget}
                jobTitle={this.state.jobTitle}
                zipCode={this.state.zipCode}
                jobDescription={this.state.jobDescription}
                timeFrame={this.state.timeFrame}
                budget={this.state.budget}
                />
                <hr />
                <InProgressJob isUser={true}/>
                <hr />
                
                <PendingJobsList userJobs={this.state.openJobs}
                />

            </div>

        )
    }

};

export default UserPage;