/**
 * Comments application. Adds new comments to a page
 * On user form submission. Uses reactjs for component rendering
 *
 * @author juanvallejo
 * @date 5/19/15
 */

var React 				= require('react');
var ApplicationWrapper 	= require('./ApplicationWrapper.jsx');

var Application = {

	events: {},
	data: [],

	userInput: {
		author: '',
		text: ''
	},

	addComment: function() {
		
		if(!Application.userInput.author || !Application.userInput.text) {
			return;
		}

		// add data to local comments array and
		// rerender components
		Application.data.push({
			author: Application.userInput.author,
			text: Application.userInput.text
		});

		Application.render();

		// save data locally for permanent storage
		Application.saveData();

	},

	/**
	 * Event subsriber. Adds callbacks to be called
	 * on event emissions.
	 */
	on: function(eventName, callback) {

		if(!Application.events[eventName]) {
			Application.events[eventName] = [];
		}

		Application.events[eventName].push(callback);

	},

	/**
	 * Calls all functions for a specific event
	 */
	emit: function(eventName, props) {

		if(!Application.events[eventName]) {
			Application.events[eventName] = [];
		}

		if(!props) {
			props = [];
		}

		for(var i = 0; i < Application.events[eventName].length; i++) {
			Application.events[eventName][i].apply(Application, props);
		}

	},

	/**
	 * Checks to see if there is locally stored data
	 * and loads it as application comment data
	 */
	loadData: function() {

		var appData = localStorage.getItem('data');

		if(appData) {
			Application.data = JSON.parse(appData);
		}

	},

	/**
	 * Save application data to local storage
	 */
	saveData: function() {

		if(localStorage.getItem('data')) {
			localStorage.removeItem('data');
		}

		localStorage.setItem('data', JSON.stringify(Application.data));
	},

	/**
	 * Removes all data saved in local storage.
	 */
	clearData: function() {
		localStorage.removeItem('data');
	},

	/**
	 * Render application to the screen with
	 * appropriate properties
	 */
	render: function() {
		React.render(<ApplicationWrapper userInput={Application.userInput} addComment={Application.addComment} data={Application.data}/>, document.getElementById('react-app'));
	}

};

module.exports = Application;