import React from 'react';
import AvailableJobsList from './AvailableJobsList';
import PendingBidList from './PendingBidList';
import InProgressJob from './InProgressJob';
import API from '../utils/API';


const fakeInProgressJob = {
    _id: 1, title: "Repair garage door and opener.", zipCode: "91915", description: "Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder."
}

class ProviderPage extends React.Component{

    state = {
        availableJobs: [],
        inProgress: fakeInProgressJob
    };
    
    componentDidMount() {
        API.getAvailableTasks()
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