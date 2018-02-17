import React from 'react';
import CreateJobForm from './CreateJobForm';
import PendingJobsList from './PendingJobsList';
import InProgressJob from './InProgressJob';
import Cookies from 'js-cookie';
import API from '../utils/API';
class UserPage extends React.Component{



    state = {
        user: 'edobb',
        status: 'open',
        user_id: 'TestGuy',
        jobTitle: '',
        jobDescription: '',
        zipCode: '',
        budget: '',
        timeFrame: '',
        openJobs: [],
        InProgressJobs: []
    };


    componentDidMount() {
        this.setState({user: Cookies.get('id')});
        console.log(this.state);
        this.getUserTasks(this.state.user);
        this.getInProgressTasks(this.state.user);
    };

    getInProgressTasks = user => {
    API.getInProgressTasksByUserName(user)
        //.then(res => {this.setState({openJobs: res.data})
        //    console.log(this.state.openJobs)})
        .then(res => this.setState({InProgressJobs: res.data}))
        .catch(err => console.log(err));

    };

    getUserTasks = user => {
        //API.getTasksByUserID(user)
        API.getTasksByUserName(user)
            //.then(res => {this.setState({openJobs: res.data})
            //    console.log(this.state.openJobs)})
            .then(res => this.setState({openJobs: res.data}))
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