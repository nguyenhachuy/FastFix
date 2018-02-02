import React from 'react';
import Job from './Job';

const AvailableJobsList = props => {

    
    return props.availableJobs.map( (job) => {

        <Job 
        title={job.title}
        zipCode={job.zipCode}
        id={job._id}
        />
    });

}

export default AvailableJobsList;
