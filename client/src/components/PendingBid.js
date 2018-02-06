import React from 'react';

const PendingBid = props => {
  return <div className="well" data-value={props.id}>   
            <p>{props.id} | {props.title} - {props.zipCode}</p>
           
             
                      
            </div>
};
export default PendingBid;