import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	return (
		<div>Hello there!</div>
    );
};

//after Meteor loads in browser, render app to the dom
Meteor.startup(() => {
	//react render call
	ReactDOM.render(<App />, document.querySelector('.container'));
});