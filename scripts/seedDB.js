const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Task collection and inserts the tasks below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fastfix",
  {
    //useMongoClient: true
  }
);

const taskSeed = [
  {
    jobTitle: "House chore",
    user_id: "1",
    contractor_id: "1",
    budget: "100",
    timeFrame: "4",
    status: "open",
    openData: new Date(Date.now()),
    Payment: false
  },
  {
    jobTitle: "Fix frige",
    user_id: "3",
    contractor_id: "2",
    budget: "50",
    timeFrame: "4",
    status: "open",
    openData: new Date(Date.now()),
    Payment: false
  }
];

db.Task
  .remove({})
  .then(() => db.Task.collection.insertMany(taskSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
