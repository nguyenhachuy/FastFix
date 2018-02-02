import React from 'react';

const AvailableJob = props => {
    <li className="single-job" data-value={props.id}>
        <p>{props.title}</p>
        <p>Job Number: {props.id} | Zipcode: {props.zipCode}</p>
    </li>
}

export default AvailableJob;