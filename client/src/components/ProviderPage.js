import React from 'react';
import AvailableJobsList from './AvailableJobsList';
import PendingBidList from './PendingBidList';
import InProgressJob from './InProgressJob';
import Cookies from 'js-cookie';
import API from '../utils/API';


const fakeInProgressJob = {
    _id: 1, title: "Repair garage door and opener.", zipCode: "91915", description: "Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder."
}

class ProviderPage extends React.Component{

    state = {
        contractor: Cookies.get('id'),
        availableJobs: [],
        jobBids: []
    };
    
    componentDidMount() {
        API.getAvailableTasks()
            .then(res => {
                this.setState({availableJobs: res.data});

            })
            .catch(err => console.log(err));
    }; 
    
    _handleBidRemoval = (jobTitle, event) => {
        API.deleteTaskByJobTitle(jobTitle)
      .then(res => this.getAvailableUserTasks(Cookies.get('id')))
      .catch(err => console.log(err));
        alert("Your Job Has Been Deleted!");
            
    }

    _bidOnJob = event => {
        alert('Button Clicked');
        API.createQuote()
        .then( res => {this.setState({jobBids: 'Bid Test'})})
        .catch( err => console.log(err));
    };

    
    render() {
        console.log(this.state.contractor);
        return(
            <div>
                <InProgressJob isUser={false} />

                <AvailableJobsList 
                availableJobs={this.state.availableJobs}
                bidOnJob={this._bidOnJob}
                />

                <PendingBidList />
            </div>


        );

    }

};

export default ProviderPage;