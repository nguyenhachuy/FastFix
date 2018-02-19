import React from 'react';

const AvailableJob = props => 
        <div className="panel panel-info" data-value={props.title}>   
            <div className="panel-heading">
              <h3 className="panel-title"><span className="glyphicon glyphicon-wrench" aria-hidden="true"></span> {props.id} | {props.title} - {props.zipCode}</h3>
            </div>
            <div className="panel-body">
              {props.description}<br />
              <button 
              onClick={props.onClick}
              className="btn btn-primary">Bid On This Job</button>
            </div>
            </div>;

export default AvailableJob;