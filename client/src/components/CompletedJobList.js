import React from 'react';
import CompletedJob from './CompletedJob';


const CompletedJobList = props => {  


      return(
        <div>
        <h4>Completed Jobs:</h4>
        {props.completedJobs.map( (completeJob) => {
                return <CompletedJob
                    title={completeJob.jobTitle}
                    userName={completeJob.username}
                    id={completeJob._id}
                           
                />
                
                }
            )
        }
        </div>
            )
    
};


export default CompletedJobList;
