import React from 'react';

const AvailableJob = props => 
        <div className="panel panel-default" data-value={props.id}>   
            <div className="panel-heading">
              <h3 className="panel-title">{props.id} | {props.title} - {props.zipCode}</h3>
            </div>
            <div className="panel-body">
              {props.description}<br />
              <button className="btn btn-primary">Bid On This Job</button>
            </div>
            </div>;

export default AvailableJob;