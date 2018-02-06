import React from 'react';
import AvailableJobsList from './AvailableJobsList';
import PendingBidList from './PendingBidList';

class ProviderPage extends React.Component{
    
    constructor(props){
        super(props);
    };

    state = {

    };

    render() {
 
        return(
            <div>
                <AvailableJobsList />

                <PendingBidList />
            </div>

 
            
        );

    }

};

export default ProviderPage;