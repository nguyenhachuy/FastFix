import React from 'react';
import CreateJobForm from './CreateJobForm';
import PendingJobsList from './PendingJobsList';
import InProgressJob from './InProgressJob';
import Cookies from 'js-cookie';
import CompletedJobList from './CompletedJobList';
import API from '../utils/API';
class UserPage extends React.Component{

    constructor(props) {
        super(props);
        this._handleJobRemoval = this._handleJobRemoval.bind(this);
    }

    state = {
        user: Cookies.get('id'),
        status: 'open',
        contractorname: '',
        username: Cookies.get('id'),
        user_id: Cookies.get('id'),
        jobTitle: '',
        requestDescription: '',
        zipCode: '',
        budget: '',
        // timeFrame: '',
        openJobs: [],
        inProgressJobs: [],
        closedJobs: []
    };


    componentDidMount() {
        this.getInProgressTasks(Cookies.get('id'));
        this.getAvailableUserTasks(Cookies.get('id'));
        this.getClosedTasksByUserName(this.state.user)
    };

    getInProgressTasks = user => {
        API.getInProgressTasksByUserName(user)
        //.then(res => {this.setState({openJobs: res.data})
        //    console.log(this.state.openJobs)})
        .then(res => this.setState({inProgressJobs: res.data}))
        .catch(err => console.log(err));

    };

    getAvailableUserTasks = user => {
        //API.getTasksByUserID(user)
        API.getAvailableTasksByUserName(user)
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
                    requestDescription: '',
                    budget: '',
                    timeFrame: ''
                }
            ) ,
            this.getAvailableUserTasks(Cookies.get('id'))

        })
        .catch(err => console.log(err));

        event.preventDefault();
            
    };

    _handleJobRemoval = (jobTitle, event) => {
        API.deleteTaskByJobTitle(jobTitle)
      .then(res => this.getAvailableUserTasks(Cookies.get('id')))
      .catch(err => console.log(err));
        alert("Your Job Has Been Deleted!");
            
    }

    _handleJobCompleted = (jobTitle, contractor, status) => {
        API.updateTaskByJobTitle({jobTitle: jobTitle, contractor: contractor , status: 'closed'})
            .then(res => {this.getInProgressTasks(Cookies.get('id')), this.getClosedTasksByUserName(Cookies.get('id'))})
            .catch(err => console.log(err));
            alert("Your Job Has Been Completed!")
    }

    getClosedTasksByUserName = userName => {
        API.getClosedTasksByUserName(userName)
            .then(res => {this.setState({closedJobs: res.data})})
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state.inProgressJobs);
        return(

            <div>
                <div className="list-wrapper off-white">
                    <CreateJobForm 
                    handleInputChange={this._handleInputChange}
                    handleJobCreation={this._handleJobCreation}
                    budget={this.state.budget}
                    jobTitle={this.state.jobTitle}
                    zipCode={this.state.zipCode}
                    requestDescription={this.state.requestDescription}
                    // timeFrame={this.state.timeFrame}
                    budget={this.state.budget}
                    />
                </div>
                
                {this.state.inProgressJobs.map( (inProgressJob) => {
                return (
                <InProgressJob
                title={inProgressJob.jobTitle}
                zipCode={inProgressJob.zipCode}
                id={inProgressJob._id}
                description={inProgressJob.requestDescription}
                isUser={true}
                userName={inProgressJob.username}
                jobCompleted={this._handleJobCompleted.bind(this,inProgressJob.jobTitle, inProgressJob.contractorname)}
                contractorName={inProgressJob.contractorname}
      
                    />
                )
                }
            )
        }
     
            
               {this.state.openJobs.length > 0 ? 
               <div className="list-wrapper">
                
                    <PendingJobsList
                    username={this.state.user}
                    userJobs={this.state.openJobs}
                    handleJobRemoval={this._handleJobRemoval}
                    />
                </div>
                :
                <div></div>
                }
                <div className="list-wrapper">
                <CompletedJobList 
                completedJobs={this.state.closedJobs}
                />
                </div>
            </div>

        )
    }

};

export default UserPage;