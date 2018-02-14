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
  findByUserId: function(req, res) {
    db.Task
      .find({ user_id: req.params.id, status: 'open' })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByContractorId: function(req, res) {
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
  findAvailableByUser: function(req, res) {
    console.log("findAvailable");
    db.Task
      .find({status: "open", username: req.username})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAvailableByContractorId: function(req, res) {
    console.log("findAvailable");
    db.Task
      .find({status: "open", contractor_id: req.contractor_id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAvailableByContractor: function(req, res) {
    console.log("findAvailable");
    db.Task
      .find({status: "open", contractorname: req.contractor})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findInProgress: function(req, res) {
    console.log("findAvailable");
    db.Task
      .find({status: "in progress"})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findInProgressByUserID: function(req, res) {
    console.log("findAvailable");
    db.Task
      .find({status: "in progress", user_id: req.user_id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findInProgressByUser: function(req, res) {
    console.log("findAvailable");
    db.Task
      .find({status: "in progress", username: req.username})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findInProgressByContractorID: function(req, res) {
    console.log("findAvailable");
    db.Task
      .find({status: "in progress", contractor_id: req.contractor_id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findInProgressByContractor: function(req, res) {
    console.log("findAvailable");
    db.Task
      .find({status: "in progress", contractorname: req.contractorname})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findClosed: function(req, res) {
    console.log("findAvailable");
    db.Task
      .find({status: "closed"})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findClosedByUserID: function(req, res) {
    console.log("findAvailable");
    db.Task
      .find({status: "closed", user_id: req.user_id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findClosedByUser: function(req, res) {
    console.log("findAvailable");
    db.Task
      .find({status: "closed", username: req.username})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findClosedByContractorID: function(req, res) {
    console.log("findAvailable");
    db.Task
      .find({status: "closed", contractor_id: req.contractor_id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findClosedByContractor: function(req, res) {
    console.log("findAvailable");
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
