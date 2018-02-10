import React, { Component } from "react";

import API from "../utils/API";


class Test extends Component{

  state = {
    tasks: []
  };

  componentDidMount() {
    this.loadTasks();
  }

  loadTasks = () => {
    API.getAllTasks()
      .then(res =>
        //console.log(res.data)
        this.setState({ tasks: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
              <div>
                {this.state.tasks.map(tasks => (
                      <strong
                        key = {tasks._id}
                      >
                        {tasks.jobTitle}
                      </strong>
                ))}
              </div>
    )}

}

export default Test;