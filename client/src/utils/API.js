import axios from "axios";

export default {
  // Gets all Tasks
  getAllTasks: function() {
    console.log("get all tasks");
    return axios.get("/api/task");
  },
  // Gets Tasks by User ID
  getTasksByUserID: function(id) {
    return axios.get("/api/task/user/" + id);
  },
  // Gets Tasks by Contractor ID
  getTasksByContracotrID: function(id) {
    return axios.get("/api/task/contractor/" + id);
  },
  // Gets Available Tasks (status: "open")
  getAvailableTasks: function() {
    return axios.get("/api/task/available");
  },
  // Create a Task
  createTask: function(taskData) {
    return axios.post("/api/task", taskData);
  },
  // Update a Task
  updateTask: function(taskData) {
    return axios.put("/api/task", taskData);
  },
  // Create a User
  createUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  // Create a User
  updateUser: function(userData) {
    return axios.put("/api/user", userData);
  },
  // Create a Contractor
  createContractor: function(contractorData) {
    return axios.post("/api/contractor", contractorData);
  },
  // Create a Contractor
  updateContractor: function(contractorData) {
    return axios.put("/api/contractor", contractorData);
  },
  // Create a Quote (Bid a task)
  createQuote: function(quoteData) {
    return axios.post("/api/quote", quoteData);
  },
  // Update a Quote
  updateQuote: function(quoteData) {
    return axios.put("/api/quote", quoteData);
  },
  // Gets a quote by Contractor ID
  updateQuote: function(id) {
    return axios.get("/api/quote/contractor/" + id);
  }
};