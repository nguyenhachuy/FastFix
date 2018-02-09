import React from 'react';
//import AvailableJob from './AvailableJob';


const fakeJobs = 
    [
        {
            _id: 1, title: "Repair garage door and opener.", zipCode: "91915", description: "Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder."  
        },
        {
            _id: 2, title: "Install sprinkler system in front yard.", zipCode: "90210", description: "Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder."  
        },
        {
            _id: 3, title: "Remove tree and stump in back yard.", zipCode: "91915", description: "Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder."  
        }

    ];

class AvailableJobsList extends React.Component {

    constructor(props){
        super(props);
    };


    

  render() {
      return(
    fakeJobs.map( (job) => {
            return (
           
               <AvailableJob 
                title={job.title}
                zipCode={job.zipCode}
                id={job._id}
                description={job.description}
                />
        
            )
            }
        ))
    }
};


export default AvailableJobsList;
