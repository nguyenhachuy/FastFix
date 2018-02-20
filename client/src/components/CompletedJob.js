import React from 'react';

const CompletedJob = props => {
  return <div className="well" data-value={props.id}>   
            <p><span className="glyphicon glyphicon-info-sign" aria-hidden="true"> </span> {props.title} - {props.userName}</p>
           
             
                      
            </div>
};
export default CompletedJob;