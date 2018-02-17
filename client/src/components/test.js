import React, { Component } from "react";

import { Input, FormBtn, ImgUpload } from "../components/Form";
import API from "../utils/API";


class Test extends Component{

  state = {
    tasks: [],
    imgfile: "",
    imgUrl: ""
  };


  componentDidMount() {
    this.loadTasks();
  }

  loadTasks = () => {

    //API.getTasksByUserName("Johnny")
    API.getClosedTasksByUserName("Gus")
      .then(res =>
        console.log(res.data)
      )
      .catch(err => console.log(err));
  }
  /*
  loadTasks = () => {
    API.getAvailableTasks()
      .then(res =>
        //console.log(res.data)
        this.setState({ tasks: res.data })
      )
      .catch(err => console.log(err));
  }
  */

  /*
  onChange(e) {
    console.log(e.target.files[0]);
    //this.setState({ imgfile:"" })
  }

  handleChangeFile() {
    console.log(this.files.length);

    API.uploadImage()
        .then(res =>
        //console.log(res.data)
        this.setState({ tasks: res.data })
        )
        .catch(err => console.log(err));
  }
  */

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
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} />
        <button type="submit" onClick={this.handleChangeFile}>Upload</button>
      </form>
      <div>
        <ImgUpload
          value={this.state.imgfile}
          onChange={this.handleChangeFile}
          name="imgfile"
          placeholder="Choose Image File"
        />{this.state.imgfile}
        <FormBtn
          onClick={this.handleFormSubmit}
        >
        Submit
        </FormBtn>
      </div>
    */

}

export default Test;