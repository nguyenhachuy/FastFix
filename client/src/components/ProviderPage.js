import React from 'react';
import AvailableJobsList from './AvailableJobsList';
<<<<<<< HEAD
import { List, ListItem } from "./List";
import API from "../utils/API";
=======
import PendingBidList from './PendingBidList';
import InProgressJob from './InProgressJob';
>>>>>>> edobb-front-end

class ProviderPage extends React.Component{
    
    constructor(props){
        super(props);
    };

    state = {
        tasks: []
    };

    componentDidMount() {
        this.loadTasks();
    }

    loadTasks = () => {
        API.getAvailableTasks()
            .then(res =>
            //console.log(res.data)
            this.setState({ tasks: res.data })
            )
            .catch(err => console.log(err));
    };

    render() {
 
        return(

            <div>
                <InProgressJob isUser={false} />

                <AvailableJobsList />

                <PendingBidList />
            </div>

 
        );

    }

};

export default ProviderPage;