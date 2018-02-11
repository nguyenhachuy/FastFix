import React from 'react';
import PendingJobBid from './PendingJobBid';

const PendingJob = props => {
  return <div className="well" data-value={props.id}>   
            <p><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> {props.id} | {props.title} - {props.zipCode}</p>
           
             
              <PendingJobBid 
                bids={props.bids}
                />

            
            </div>
};
export default PendingJob;