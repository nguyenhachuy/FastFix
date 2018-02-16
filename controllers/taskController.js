const db = require("../models");

// Defining methods for the taskController
module.exports = {
  create: function(req, res) {
    db.Task
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    console.log("findAll");
    console.log(req.query)
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
  findByUserID: function(req, res) {
    db.Task
      .find({ user_id: req.params.id, status: 'open' })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUserName: function(req, res) {
    db.Task
      .find({ username: req.params.username, status: 'open' })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByContractorID: function(req, res) {
    db.Task
      .find({ contractor_id: req.params.id })
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
      .find({status: "open", user_id: req.user_id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAvailableByUserName: function(req, res) {
    console.log("findAvailable");
    db.Task
      .find({status: "open", username: req.username})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAvailableByContractorID: function(req, res) {
    console.log("findAvailableByContractorID");
    db.Task
      .find({status: "open", contractor_id: req.contractor_id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAvailableByContractorName: function(req, res) {
    console.log("findAvailableByContractorName");
    db.Task
      .find({status: "open", contractorname: req.contractorname})
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
      .find({status: "in progress", user_id: req.user_id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findInProgressByUserName: function(req, res) {
    console.log("findInProgressByUserName");
    db.Task
      .find({status: "in progress", username: req.username})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findInProgressByContractorID: function(req, res) {
    console.log("findInProgressByContractorID");
    db.Task
      .find({status: "in progress", contractor_id: req.contractor_id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findInProgressByContractorName: function(req, res) {
    console.log("findInProgressByContractorName");
    db.Task
      .find({status: "in progress", contractorname: req.contractorname})
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
      .find({status: "closed", user_id: req.user_id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findClosedByUserName: function(req, res) {
    console.log("findClosedByUserName");
    db.Task
      .find({status: "closed", username: req.username})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findClosedByContractorID: function(req, res) {
    console.log("findClosedByContractorID");
    db.Task
      .find({status: "closed", contractor_id: req.contractor_id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findClosedByContractorName: function(req, res) {
    console.log("findClosedByContractorName");
    db.Task
      .find({status: "closed", contractorname: req.contractorname})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Task
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Task
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
