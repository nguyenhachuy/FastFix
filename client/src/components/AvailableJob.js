import React from 'react';

const AvailableJob = props =>  
        <div className="panel panel-info" data-value={props.title}>   
            <div className="panel-heading">
              <h2 className="panel-title"><span className="glyphicon glyphicon-wrench" aria-hidden="true"></span> {props.title} - {props.zipCode}</h2>
            </div>
            <div className="panel-body">
              <p>{props.description}</p>
              <p>Budget: ${props.budget}</p>
              { props.inProgressLength < 1 ? 
              <button 
              onClick={props.scheduleJob.bind(this, props.title, props.contractor)}
              className="btn btn-primary">Schedule Job</button> 
              :
              <h4>You Cannot Schedule More Work Untill You Complete Your In Progess Job</h4> }
            </div>
        </div>;

         
        

export default AvailableJob;