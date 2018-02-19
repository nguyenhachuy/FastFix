import React from 'react';

const ProviderInfo = props => <div>
    <h5>Customer Contact Information:</h5><p>{props.firstName} {props.lastName}<br />Expected Date: {props.date} Time: {props.time}<br />
    <button
    onClick={props.onClick}
    type="button" className="btn btn-success"><span className="glyphicon glyphicon-comment" aria-hidden="true"> </span> Contact Your Customer</button></p></div>;

export default ProviderInfo;