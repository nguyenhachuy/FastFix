const db = require("../models");

// Defining methods for the quoteController
module.exports = {
  create: function(req, res) {
    db.Quote
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.Quote
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Quote
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByContractorId: function(req, res) {
    db.Quote
      .findById({ contractor_id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByContractorName: function(req, res) {
    db.Quote
      .findOne({ contractorname: req.params.contractorname })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Quote
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Quote
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateByJobTitle: function(req, res) {
    db.Quote
      .findOneAndUpdate({ jobTitle: req.params.jobtitle }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeByJobTitle: function(req, res) {
    db.Quote
      .findOne({ jobTitle: req.params.jobtitle })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByJobTitle: function(req, res) {
    db.Quote
      .findOne({ jobTitle: req.params.jobtitle })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
