import React from 'react';
import AvailableJob from './AvailableJob';
import API from '../utils/API'



const AvailableJobsList = props => {

   
 
      
        return(
            props.availableJobs.map( (job) => {
            
            return (
           
               <AvailableJob 
                title={job.jobTitle}
                zipCode={job.zipCode}
                id={job._id}
                budget={job.budget}
                description={job.requestDescription}
                scheduleJob={props.scheduleJob.bind(this, job.jobTitle, props.status, props.contractor)}
                inProgressLength={props.inProgressJobs}
                />
        
            )
            }
        ))
    


};


export default AvailableJobsList;
