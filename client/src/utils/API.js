import axios from "axios";

export default {
  // Gets all Tasks
  getAllTasks: function() {
    return axios.get("/api/task");
  },
  getTasksByUserID: function(id) {
    return axios.get("/api/task/user/" + id);
  },
  getTasksByContracotrID: function(id) {
    return axios.get("/api/task/contractor/" + id);
  },
  updateTask: function(taskData) {
    return axios.put("/api/task", taskData);
  },
  updateTask: function(taskData) {
    return axios.put("/api/task", taskData);
  },
  saveTask: function(taskData) {
    return axios.post("/api/task", taskData);
  },
  createUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  updateUser: function(userData) {
    return axios.put("/api/user", userData);
  }
};
