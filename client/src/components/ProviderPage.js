import React from 'react';
import AvailableJobsList from './AvailableJobsList';
import PendingBidList from './PendingBidList';
import InProgressJob from './InProgressJob';
import Cookies from 'js-cookie';
import API from '../utils/API';
class ProviderPage extends React.Component{

    state = {
        contractor: Cookies.get('id'),
        availableJobs: []
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