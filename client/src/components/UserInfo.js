import React from 'react';

const UserInfo = props => <div>
    <h5>You Selected The Following Service Provider:</h5><p>{props.firstName} {props.lastName}<br />Expected Date: {props.date} Time: {props.time}<br />
    <button 
    onClick={props.onClick}
    type="button" className="btn btn-success"><span className="glyphicon glyphicon-comment" aria-hidden="true"> </span> Contact Your Service Provider</button></p></div>;

export default UserInfo;