import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';

const EmployeeList = (props) => {
	//props.employees => an array of objescts
	console.log(props.employees);
	return (
        <div> 
          <div className="employee-list">
            Employee List
          </div>
          </div>
        );
};


export default createContainer(() => {
   //set up subscription
   Meteor.subscribe('employees');
   //return an object
   //as props
   return{ employees: Employees.find({}).fetch() }; 
}, EmployeeList);