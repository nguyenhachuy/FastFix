import React from 'react';
import AvailableJobsList from './AvailableJobsList';

class ProviderPage extends React.Component{

    state = {

    };

    render() {

        return(
    
            <div>
                <h1>Provider Page Placeholder</h1>
                <ul className="job-list">
                    <AvailableJobsList />
                </ul>
            </div>
            
        );

    }

};

export default ProviderPage;