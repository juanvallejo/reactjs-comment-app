
// import deps
var React 				= require('react');

/**
 * Main application wrapper. Root node of our document.body subtree
 */
var TextArea = React.createClass({

	handleChange: function(changeEvent) {
		this.props.userInput.text = changeEvent.target.value;
		this.setState({value: changeEvent.target.value});
	},
	render: function() {
		return (
			<textarea ref="text" placeholder="Enter a comment..." onChange={this.handleChange}></textarea>
		);
	}

});

module.exports = TextArea;