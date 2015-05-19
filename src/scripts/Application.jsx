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
	data: [
		{author: 'Juan Vallejo', text: 'Hello World!'},
		{author: 'Test', text: 'Hi'},
		{author: 'Kyle', text: 'test comment, #yolo'},
		{author: 'Borat', text: 'nice to meet you'}
	],

	userInput: {
		author: '',
		text: ''
	},

	addComment: function() {
		
		if(!Application.userInput.author || !Application.userInput.text) {
			return;
		}

		Application.data.push({
			author: Application.userInput.author,
			text: Application.userInput.text
		});

		Application.render();

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
	 * Fires all callback functions in the array under the key specified
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

	render: function() {
		React.render(<ApplicationWrapper userInput={Application.userInput} addComment={Application.addComment} data={Application.data}/>, document.body);
	}

};

module.exports = Application;