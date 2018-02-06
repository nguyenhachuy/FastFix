import React from 'react';

const ProviderInfo = props => <div><p>{props.firstName} {props.lastName}<br />Expected Date: {props.date} Time: {props.time}<br /><button className="btn btn-alert">Contact {props.firstName}</button></p></div>;

export default ProviderInfo;