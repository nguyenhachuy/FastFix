import React from 'react';

const PendingJobBid = props => {

    return <div>
                {props.bids.map( (bid) => {
                    return bid.firstName + ' - ' + bid.rating + ' | '
                })}
            </div>
    };

export default PendingJobBid;