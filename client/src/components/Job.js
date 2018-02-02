import React from 'react';

const job = props =>{
    <li className="single-job" data-value={props.id}>
        <p>{props.title} | {props.zipCode}</p>
    </li>
}

export default Job;