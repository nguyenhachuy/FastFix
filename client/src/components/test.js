import React, { Component } from "react";

import { Input, FormBtn, ImgUpload } from "../components/Form";
import API from "../utils/API";


class Test extends Component{

  state = {
    tasks: [],
    imgfile: ""
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



  handleChangeFile = event => {
    event.preventDefault();
    if (this.state.topic) {
      //console.log("clicked")
      API.getNytArticles({
        topic: this.state.topic,
        startyear: this.state.startyear,
        endyear: this.state.endyear
      })
        //.then(res => this.setState({ nytarticles: res.data, topic: "", startyear: "", endyear: ""  }))
        .then(res => this.setState({ nytarticles: res.data.response.docs, topic: "", startyear: "", endyear: ""  }))
        //.then(res => console.log(res.data.response.docs))
        .catch(err => console.log(err));
    }
  };
  
  uploadFile = event => {
    event.preventDefault();
    if (this.state.topic) {
      //console.log("clicked")
      API.getNytArticles({
        topic: this.state.topic,
        startyear: this.state.startyear,
        endyear: this.state.endyear
      })
        //.then(res => this.setState({ nytarticles: res.data, topic: "", startyear: "", endyear: ""  }))
        .then(res => this.setState({ nytarticles: res.data.response.docs, topic: "", startyear: "", endyear: ""  }))
        //.then(res => console.log(res.data.response.docs))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
              <div>
                <input type="file" onChange={(e) => this.handleChangeFile(e)}/>
                <FormBtn
                  onClick={this.handleFormSubmit}
                >
                Submit
                </FormBtn>
                
                {this.state.tasks.map(tasks => (
                      <strong
                        key = {tasks._id}
                      >
                        {tasks.jobTitle}
                      </strong>
                ))}
              </div>
    )}

    /*
                <ImgUpload
                  value={this.state.imgfile}
                  onChange={this.handleInputChange}
                  name="endyear"
                  placeholder="Choose Image File"
                />
                <FormBtn
                  disabled={!(this.state.topic)}
                  onClick={this.handleFormSubmit}
                >
                Submit
                </FormBtn>
    */

}

export default Test;