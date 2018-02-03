import React from 'react';

const AvailableJob = props => 
        <div class="panel panel-default" data-value={props.id}>   
            <div class="panel-heading">
              <h3 class="panel-title">{props.id} | {props.title} - {props.zipCode}</h3>
            </div>
            <div class="panel-body">
              {props.description}<br />
              <button class="btn btn-primary">Bid On This Job</button>
            </div>
            </div>;

export default AvailableJob;