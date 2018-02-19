import React from 'react';
import AvailableJobsList from './AvailableJobsList';
import PendingBidList from './PendingBidList';
import InProgressJob from './InProgressJob';
import Cookies from 'js-cookie';
import API from '../utils/API';

class ProviderPage extends React.Component{

    state = {
        contractor: Cookies.get('id'),
        inProgressJobs: [],
        availableJobs: [],
        openBids: []
    };
    
    componentDidMount() {
        this.getAvailableTasks();
        this.getInProgressTasksByContractorName(this.state.contractor);
        this.getQuoteByContractorName(this.state.contractor);
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

    getQuoteByContractorName = contractor => {
        API.getQuoteByContractorName(contractor)
            .then(res => {this.setState({openBids: res.data})})
            .catch(err => console.log(err));
        
    }

    _handleBidRemoval = (jobTitle, event) => {
        API.deleteTaskByJobTitle(jobTitle)
      .then(res => this.getAvailableUserTasks(Cookies.get('id')))
      .catch(err => console.log(err));
        alert("Your Bid Has Been Deleted!");
            
    }

    _bidOnJob = (jobTitle, event) => {
        alert('Button Clicked');
        API.createQuote(jobTitle)
        .then( res => {this.setState({jobBids: 'Bid Test'})})
        .catch( err => console.log(err));
    };

    
    render() {
        console.log(this.state);
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
                

                <AvailableJobsList 
                availableJobs={this.state.availableJobs}
                bidOnJob={this._bidOnJob}
                handleBidRemoval={this._handleBidRemoval}
                />

                <PendingBidList />
            </div>


        );

    }

};

export default ProviderPage;