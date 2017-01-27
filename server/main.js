import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  //generate data
  //see if collection has any records
  const numberRecords = Employees.find({}).count();
  if (!numberRecords) {
  	
  }
});
