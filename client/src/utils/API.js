import axios from "axios";

export default {
  // Gets all Tasks
  getAllTasks: function() {
    console.log("get all tasks");
    return axios.get("/api/task");
  },
  // Gets Tasks by User ID
  getTasksByUserID: function(id) {
    return axios.get("/api/task/userid/" + id);
  },
  // Gets Tasks by User Name
  getTasksByUserName: function(username) {
    return axios.get("/api/task/username/" + username);
  },
  // Gets Tasks by Contractor ID
  getTasksByContractorID: function(id) {
    return axios.get("/api/task/contractorid/" + id);
  },
  // Gets Tasks by Contractor Name
  getTasksByContractorName: function(id) {
    return axios.get("/api/task/contractorname/" + id);
  },
  // Gets Available Tasks (status: "open")
  getAvailableTasks: function() {
    return axios.get("/api/task/available");
  },
  getAvailableTasksByUserID: function(id) {
    return axios.get("/api/task/available/userid/" + id);
  },
  getAvailableTasksByUserName: function(username) {
    return axios.get("/api/task/available/username/" + username);
  },
  getAvailableTasksByContractorID: function(id) {
    return axios.get("/api/task/available/contractorid/" + id);
  },
  getAvailableTasksByContractorName: function(contractorname) {
    return axios.get("/api/task/available/contractorname/" + contractorname);
  },
  // Gets In Progress Tasks (status: "in progress")
  getInProgressTasks: function() {
    return axios.get("/api/task/inprogress");
  },
  getInProgressTasksByUserID: function(id) {
    return axios.get("/api/task/inprogress/userid/" + id);
  },
  getInProgressTasksByUserName: function(username) {
    return axios.get("/api/task/inprogress/username/" + username);
  },
  getInProgressTasksByContractorID: function(id) {
    return axios.get("/api/task/inprogress/contractorid/" + id);
  },
  getInProgressTasksByContractorName: function(contractorname) {
    return axios.get("/api/task/inprogress/contractorname/" + contractorname);
  },
  // Gets Closed Tasks (status: "closed")
  getClosedTasks: function() {
    return axios.get("/api/task/closed");
  },
  getClosedTasksByUserID: function(id) {
    return axios.get("/api/task/closed/userid/" + id);
  },
  getClosedTasksByUserName: function(username) {
    return axios.get("/api/task/closed/username/" + username);
  },
  getClosedTasksByContractorID: function(id) {
    return axios.get("/api/task/closed/contractorid/" + id);
  },
  getClosedTasksByContractorName: function(contractorname) {
    return axios.get("/api/task/closed/contractorname/" + contractorname);
  },
  // Create a Task
  createTask: function(taskData) {
    return axios.post("/api/task", taskData);
  },
  // Update a Task
  updateTask: function(taskData) {
    return axios.put("/api/task", taskData);
  },
  // Update a Task By Job Title
  updateTaskByJobTitle: function(taskData) {
    return axios.put("/api/task/jobtitle", taskData);
  },
  // completeTaskByJobTitle: function(taskData) {
  //   console.log(taskData);
  //   return axios.put("/api/task/jobtitle", taskData);
  // },
  // Delete a Task
  deleteTaskByJobTitle: function(jobtitle) {
    return axios.delete("/api/task/jobtitle/" + jobtitle);
　/*
  deleteTask: function(jobTitle) {
    return axios.delete("/api/task/" +  jobTitle)
  */
  },
  // Get a User By ID
  getUserByID: function(id) {
    return axios.get("/api/user/id/" + id);
  },
  // Get a User By name
  getUserByName: function(name) {
    return axios.get("/api/user/name/" + name);
  },
  // Create a User
  createUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  // Update a User
  updateUser: function(userData) {
    return axios.put("/api/user", userData);
  },
  // Create a Quote (Bid a task)
  createQuote: function(quoteData) {
    return axios.post("/api/quote", quoteData);
  },
  // Delete a Bid by jobTitle
  deleteQuote: function(quoteData) {
   
  },
  // Update a Quote
  updateQuote: function(quoteData) {
    return axios.put("/api/quote", quoteData);
  },
  // Gets a quote by Contractor ID
  getQuote: function(id) {
    return axios.get("/api/quote/contractor/id/" + id);
  },
  getQuoteByContractorName: function(name) {
    return axios.get("/api/quote/contractor/name/" + name);
  },
  // Update a Quote By job title
  updateQuoteByJobTitle: function(quoteData) {
    return axios.put("/api/quote/jobtile", quoteData);
  },
  // Delete a Quote By job title
  deleteQuoteByJobTitle: function(jobtitle) {
    return axios.delete("/api/quote/jobtile/" + jobtitle);
  },
  // Gets a quote by Job Title
  getQuoteByJobTitle: function(jobtitle) {
    return axios.get("/api/quote/jobtile/" + jobtitle);
  }
};
