import React from 'react';
import AvailableJobsList from './AvailableJobsList';
import CompletedJobList from './CompletedJobList';
import InProgressJob from './InProgressJob';
import Cookies from 'js-cookie';
import API from '../utils/API';

class ProviderPage extends React.Component{

    state = {
        contractor: Cookies.get('id'),
        inProgressJobs: [],
        availableJobs: [],
        closedJobs: [],
        openBids: [],
        status: 'in progress'
    };
    
    componentDidMount() {
        this.getAvailableTasks();
        this.getInProgressTasksByContractorName(this.state.contractor);
        this.getQuoteByContractorName(this.state.contractor);
        this.getClosedTasksByContractor(this.state.contractor);
    }; 
    
    getAvailableTasks = () => {
        API.getAvailableTasks()
            .then(res => {this.setState({availableJobs: res.data})})
            .catch(err => console.log(err));
        
    }

    getInProgressTasksByContractorName = contractor => {
        API.getInProgressTasksByContractorName(contractor)
            .then(res => {this.setState({inProgressJobs: res.data})})
            .catch(err => console.log(err));
        
    }

    getClosedTasksByContractor = contractor => {
        API.getClosedTasksByContractorName(contractor)
            .then(res => {this.setState({closedJobs: res.data})})
            .catch(err => console.log(err));
    } 

    getQuoteByContractorName = contractor => {
        API.getQuoteByContractorName(contractor)
            .then(res => {this.setState({openBids: res.data})})
            .catch(err => console.log(err));
        
    }

    // _handleBidRemoval = (jobTitle, event) => {
    //     API.deleteTaskByJobTitle(jobTitle)
    //   .then(res => this.getAvailableUserTasks(Cookies.get('id')))
    //   .catch(err => console.log(err));
    //     alert("Your Bid Has Been Deleted!");
            
    // }



    _scheduleJob = (jobTitle, status, contractor) => {
        console.log(jobTitle, contractor);
        API.updateTaskByJobTitle({jobTitle: jobTitle, status: 'in progress', contractor: this.state.contractor})
            .then(res => {this.getInProgressTasksByContractorName(Cookies.get('id')), this.getClosedTasksByContractorName(this.state.contractor) })
            .catch(err => console.log(err));
            alert("This Job Has Been Assigned To You. Please Reach Out to Customer!");
    }

    
    render() {
        const inProgressJobLength = this.state.inProgressJobs.length;
        return(
            <div>
                {this.state.inProgressJobs.map( (inProgressJob) => {
                return (
                <InProgressJob
                    title={inProgressJob.jobTitle}
                    zipCode={inProgressJob.zipCode}
                    id={inProgressJob._id}
                    description={inProgressJob.requestDescription}
                    isUser={false}
                    userName={inProgressJob.username}
                    contractorName={inProgressJob.contractorname}
      
                    />
                )
                }
            )
        }
                
                <div className="list-wrapper light-blue">

                    {this.state.availableJobs.length > 0 ?
                    <div>                   
                        <h3>Available Jobs:</h3>
                        <AvailableJobsList 
                        availableJobs={this.state.availableJobs}
                        scheduleJob={this._scheduleJob}
                        contractor={this.state.contractor}
                        inProgressJobs={inProgressJobLength}
                        
                        />
                    </div>
                    
                    :
                    
                    <h3 className="centered light-blue-text">There Are Currently No Jobs Available.</h3>
                    }
                </div>
                <div className="list-wrapper">
                <CompletedJobList 
                completedJobs={this.state.closedJobs}
                />
                </div>
            </div>


        );

    }

};

export default ProviderPage;