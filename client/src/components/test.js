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
        console.log(res.data)
        //this.setState({ tasks: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
              <div>aa
              </div>
    )}

}

export default Test;