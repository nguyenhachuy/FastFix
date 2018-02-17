import React from 'react';
import CreateJobForm from './CreateJobForm';
import PendingJobsList from './PendingJobsList';
import InProgressJob from './InProgressJob';
import Cookies from 'js-cookie';
import API from '../utils/API';
class UserPage extends React.Component{

    constructor(props) {
        super(props);
        this._handleJobRemoval = this._handleJobRemoval.bind(this);
    }

    state = {
        user: Cookies.get('id'),
        status: 'open',
        username: Cookies.get('id'),
        user_id: Cookies.get('id'),
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
        this.getInProgressTasks(Cookies.get('id'));
        this.getUserTasks(Cookies.get('id'));
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

    _handleJobRemoval = (jobTitle, event) => {
        API.deleteTask(jobTitle);
        alert("button pressed");
            
    }

    render() {
        console.log(this.state.InProgressJobs);
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
                <InProgressJob
                isUser={true}
                userName={this.state.userName}
                />
                <hr />
                
                <PendingJobsList 
                userJobs={this.state.openJobs}
                handleJobRemoval={this._handleJobRemoval}
                />

            </div>

        )
    }

};

export default UserPage;