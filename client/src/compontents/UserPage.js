import React from 'react';
import CreateJobForm from './CreateJobForm';
import PendingBids from './PendingBids';

class UserPage extends React.Component{

    state = {
        
    };

    render() {

        return(

            <div>
                
            <CreateJobForm />

            <PendingBids />

            </div>

        )
    }

};

export default UserPage;