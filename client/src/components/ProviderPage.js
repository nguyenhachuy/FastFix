import React from 'react';
import AvailableJobsList from './AvailableJobsList';
import PendingBidList from './PendingBidList';
import InProgressJob from './InProgressJob';

class ProviderPage extends React.Component{
    
    constructor(props){
        super(props);
    };

    state = {

    };

    render() {
 
        return(
            <div>
                <InProgressJob isUser={false} />

                <AvailableJobsList />

                <PendingBidList />
            </div>

 
            
        );

    }

};

export default ProviderPage;