import React from 'react';

const AvailableJob = props =>{
    <li className="single-job" data-value={props.id}>
        <p>{props.title} | {props.zipCode}</p>
    </li>
}

export default AvailableJob;