import React from 'react';
import InProgressJob from './InProgressJob';




const InProgressJobsList = props => {

   
 
      
        return(
            props.availableJobs.map( (job) => {
            
            return (
           
               <AvailableJob 
                title={job.jobTitle}
                zipCode={job.zipCode}
                id={job._id}
                budget={job.budget}
                description={job.requestDescription}
                scheduleJob={props.scheduleJob}
                />
        
            )
            }
        ))
    


};


export default InProgressJobsList;
