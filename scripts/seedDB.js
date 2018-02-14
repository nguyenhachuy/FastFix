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
    budget: 100,
    timeFrame: 4,
    status: "open",
    openData: new Date(Date.now()),
    payment: false
  },
  {
    jobTitle: "Fix frige",
    user_id: "3",
    contractor_id: "2",
    budget: 50,
    timeFrame: 4,
    status: "open",
    openData: new Date(Date.now()),
    payment: false
  },
  {
    jobTitle: "Fix roof",
    user_id: "3",
    contractor_id: "2",
    budget: 545,
    timeFrame: 7,
    status: "closed",
    openData: new Date(Date.now()),
    payment: false
  },
  {
    jobTitle: "Paint house",
    user_id: "3",
    contractor_id: "2",
    budget: 545,
    timeFrame: 7,
    status: "open",
    openData: new Date(Date.now()),
    payment: false
  }
];

db.Task
.remove({})
.then(() => db.Task.collection.insertMany(taskSeed))
.then(data => {
  console.log(data);
  console.log(data.insertedIds.length + " records inserted!"); // undefined. maybe because of version
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
      

const userSeed = [
        {
          firstName: 'Johnny',
          lastName: 'American',
          streetAddress: '123 Fake Street',
          zipCode: '90210'
      
        }
      ]

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data);
    console.log(data.insertedIds.length + " records inserted!"); // undefined. maybe because of version
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });