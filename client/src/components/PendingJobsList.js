import React from 'react';
import Cookies from 'js-cookie';
import PendingJob from './PendingJob';


const fakePendingJobs = 
    [
        {
            _id: 1, title: "Repair garage door and opener.", zipCode: "91915", description: "Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder.", bids: [{firstName: 'Johnny', rating: '4.4'}, {firstName: 'George', rating: '4.2'}, {firstName: 'Otis', rating: '4.8'}]
        },
        {
            _id: 2, title: "Install sprinkler system in front yard.", zipCode: "90210", description: "Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder.", bids: [{firstName: 'Johnny', rating: '4.4'}, {firstName: 'George', rating: '4.2'}, {firstName: 'Otis', rating: '4.8'}]  
        },
        {
            _id: 3, title: "Remove tree and stump in back yard.", zipCode: "91915", description: "Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder.", bids: [{firstName: 'Johnny', rating: '4.4'}, {firstName: 'George', rating: '4.2'}, {firstName: 'Otis', rating: '4.8'}]  
        }

    ];
    
    const PendingJobsList = props => {
    
    console.log(props.userJobs);
     
          return(
        <div>
        <h4>Your Open Jobs:</h4>
        {props.userJobs.map( (job) => {
                return (
                <PendingJob 
                    title={job.jobTitle}
                    zipCode={job.zipCode}
                    id={job._id}
                    description={job.requestDescription}
                    onClick={props.handleJobRemoval.bind(this, job.jobTitle, props.username)}
                    bids={job.bids}
                    />
                )
                }
            )
        }
        </div>
            )
        
    };
    
    
    export default PendingJobsList;
    


