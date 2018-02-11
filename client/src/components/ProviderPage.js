import React from 'react';
import AvailableJobsList from './AvailableJobsList';
import PendingBidList from './PendingBidList';
import InProgressJob from './InProgressJob';
import axios from 'axios';
import API from '../utils/API';

class ProviderPage extends React.Component{

    state = {
        availableJobs: []
    };
    
    componentDidMount() {
        API.getAllTasks()
            .then(res => {
                this.setState({availableJobs: res.data});

            })
            .catch(err => console.log(err));
    };  

    
    render() {
 
        return(
            <div>
                <InProgressJob isUser={false} />

                <AvailableJobsList 
                availableJobs={this.state.availableJobs}
                />

                <PendingBidList />
            </div>

 
            
        );

    }

};

export default ProviderPage;