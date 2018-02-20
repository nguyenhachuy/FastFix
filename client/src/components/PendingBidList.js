import React from 'react';
import PendingBid from './PendingBid';


const fakePendingBids = 
    [
        {
            _id: 1, title: "Repair garage door and opener.", zipCode: "91915", description: "Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder.", bids: [{firstName: 'Johnny', rating: '4.4'}, {firstName: 'George', rating: '4.2'}, {firstName: 'Otis', rating: '4.8'}]
        },
        {
            _id: 2, title: "Install sprinkler system in front yard.", zipCode: "90210", description: "Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder.", bids: [{firstName: 'Johnny', rating: '4.4'}, {firstName: 'George', rating: '4.2'}, {firstName: 'Otis', rating: '4.8'}]  
        },
        {
            _id: 3, title: "Remove tree and stump in back yard.", zipCode: "91915", description: "Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder Dummy text placeholder.", bids: [{firstName: 'Johnny', rating: '4.4'}, {firstName: 'George', rating: '4.2'}, {firstName: 'Otis', rating: '4.8'}]  
        }

    ];

const PendingBidList = props => {  


      return(
        <div>
        <h4>The Following Bids are Pending:</h4>
        {fakePendingBids.map( (bid) => {
                return <PendingBid 
                    title={bid.title}
                    zipCode={bid.zipCode}
                    id={bid._id}
                    description={bid.description}
                    // onClick={props.handleBidRemoval.bind(this, bid.jobTitle)}
                />
                
                }
            )
        }
        </div>
            )
    
};


export default PendingBidList;
