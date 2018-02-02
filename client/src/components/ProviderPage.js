import React from 'react';
import AvailableJobsList from './AvailableJobList';

class ProviderPage extends React.Component{

    state = {

    };

    render() {

        return(
    
            <div>
                <ul className="job-list">
                    <AvailableJobsList />
                </ul>
            </div>
            
        );

    }

};

export default ProviderPage;