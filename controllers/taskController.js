const db = require("../models");

// Defining methods for the taskController
module.exports = {
  create: function(req, res) {
    console.log(req.body);
    db.Task
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    console.log("findAll");
    console.log(req.query);
    db.Task
      .find()
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("findById");
    db.Task
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUserID: function(req, res) { //All Tasks
    db.Task
      .find({ user_id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUserName: function(req, res) { //All Tasks
    db.Task
      .find({ username: req.params.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByContractorID: function(req, res) { //All Tasks
    db.Task
      .find({ contractor_id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByContractorName: function(req, res) { //All Tasks
    db.Task
      .find({ contractorname: req.params.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAvailable: function(req, res) {
    console.log("findAvailable");
    db.Task
      .find({status: "open"})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAvailableByUserID: function(req, res) {
    console.log("findAvailable");
    db.Task
      .find({status: "open", user_id: req.params.user_id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAvailableByUserName: function(req, res) {
    console.log("findAvailable");
    db.Task
      .find({status: "open", username: req.params.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAvailableByContractorID: function(req, res) {
    console.log("findAvailableByContractorID");
    db.Task
      .find({status: "open", contractor_id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAvailableByContractorName: function(req, res) {
    console.log("findAvailableByContractorName");
    db.Task
      .find({status: "open", contractorname: req.params.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findInProgress: function(req, res) {
    console.log("findInProgress");
    db.Task
      .find({status: "in progress"})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findInProgressByUserID: function(req, res) {
    console.log("findInProgressByUserID");
    db.Task
      .find({status: "in progress", user_id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findInProgressByUserName: function(req, res) {
    console.log("findInProgressByUserName");
    console.log(req.params.name);
    db.Task
      .find({status: "in progress", username: req.params.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findInProgressByContractorID: function(req, res) {
    console.log("findInProgressByContractorID");
    db.Task
      .find({status: "in progress", contractor_id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findInProgressByContractorName: function(req, res) {
    console.log("findInProgressByContractorName");
    db.Task
      .find({status: "in progress", contractorname: req.params.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findClosed: function(req, res) {
    console.log("findClosed");
    db.Task
      .find({status: "closed"})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findClosedByUserID: function(req, res) {
    console.log("findClosedByUserID");
    db.Task
      .find({status: "closed", user_id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findClosedByUserName: function(req, res) {
    console.log("findClosedByUserName");
    db.Task
      .find({status: "closed", username: req.params.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findClosedByContractorID: function(req, res) {
    console.log("findClosedByContractorID");
    db.Task
      .find({status: "closed", contractor_id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findClosedByContractorName: function(req, res) {
    console.log("findClosedByContractorName");
    db.Task
      .find({status: "closed", contractorname: req.params.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Task
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateByJobTitle: function(req, res) {
    console.log('updateByJobTitle');
    console.log(req);
    db.Task
      .findOneAndUpdate({ jobTitle: req.body.jobTitle }, {status: req.body.status, contractorname: req.body.contractor}, {new:true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // completeByJobTitle: function(req, res) {
  //   console.log('completeByJobTitle');
  //   console.log(req);
  //   db.Task
  //     .findOneAndUpdate({ jobTitle: req.body.jobTitle }, {status: 'closed'}, {new:true})
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  remove: function(req, res) {
    db.Task
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeByJobTitle: function(req, res) {
    console.log("removeByJobTitle");
    console.log(req.params.jobtitle);
    db.Task
      .findOne({ jobTitle: req.params.jobtitle })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
