import React from 'react';
import PendingJobBid from './PendingJobBid';

const PendingJob = props => {

  return <div className="well" data-value={props.id}>   
            <p><span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>{props.title}<br />
            {props.description} - {props.zipCode}</p>
            <button type="button" onClick={props.onClick}>Delete Job</button>
           
             
              {/* <PendingJobBid 
                bids={props.bids}
                /> */}

            
            </div>
};
export default PendingJob;