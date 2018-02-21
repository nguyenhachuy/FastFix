import React from 'react';

    
const UserInfo = props => {
    console.log(props.contractorName);
    return <div>
    <h5>Your Service Provider: {props.contractorName}</h5>
    <p>
    <button 
    onClick={props.toggleChat}

    type="button" className="btn btn-success"><span className="glyphicon glyphicon-comment" aria-hidden="true"> </span> Chat With {props.contractorName}</button></p>
    <p>
    <button 
    onClick={props.jobCompleted.bind(this, props.jobTitle, props.contractorName)}
    type="button" className="btn btn-info"> Click When Job Completed</button></p></div>
}
export default UserInfo;