import React from 'react';
import AvailableJobsList from './AvailableJobsList';
import { List, ListItem } from "./List";
import API from "../utils/API";

class ProviderPage extends React.Component{

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

              <List>
                {this.state.tasks.map(tasks => (
                  <ListItem key={tasks._id}>
                      <strong>
                        {tasks.jobTitle} || {tasks.zipCode}
                      </strong>
                  </ListItem>
                ))}
              </List>
        );

    }

};

export default ProviderPage;