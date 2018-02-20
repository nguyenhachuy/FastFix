import React from 'react';

const ProviderInfo = props => 
    <div>
        <h5>Customer's Name: {props.userName}</h5>
        <p>
        <button
        onClick={props.toggleChat}
        type="button" className="btn btn-success"><span className="glyphicon glyphicon-comment" aria-hidden="true"> </span> Chat With {props.userName}</button>
        </p>
    </div>;

export default ProviderInfo;