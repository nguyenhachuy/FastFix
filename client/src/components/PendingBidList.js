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

class PendingBidList extends React.Component {

    constructor(props){
        super(props);
    };


    

  render() {
      return(
        <div>
        <h4>You Currently Have the Following Open Bids:</h4>
        {fakePendingBids.map( (job) => {
                return <PendingBid 
                    title={job.title}
                    zipCode={job.zipCode}
                    id={job._id}
                    description={job.description}
                />
                
                }
            )
        }
        </div>
            )
    }
};


export default PendingBidList;
