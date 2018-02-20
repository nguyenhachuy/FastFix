import React from 'react';

const UserInfo = props => <div>
    <h5>You Selected The Following Service Provider:</h5><p>{props.firstName} {props.lastName}<br />
    <button 
    onClick={props.onClick}
    toggleChat={props.toggleChat}
    type="button" className="btn btn-success"><span className="glyphicon glyphicon-comment" aria-hidden="true"> </span> Chat With Contractor</button></p></div>;

export default UserInfo;