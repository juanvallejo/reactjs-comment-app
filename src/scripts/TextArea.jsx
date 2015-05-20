
// import deps
var React 				= require('react');

/**
 * Main application wrapper. Root node of our document.body subtree
 */
var TextArea = React.createClass({

	clearInputValue: function() {
		this.setState({value: ''});
	},
	getInitialState: function() {
		return {
			value: ''
		}
	},
	handleChange: function(changeEvent) {
		this.props.userInput.text = changeEvent.target.value;
		this.setState({value: changeEvent.target.value});
	},
	render: function() {

		this.props.getContext(this);

		return (
			<textarea className="text-area" ref="text" placeholder="Enter a comment..." value={this.state.value} onChange={this.handleChange}></textarea>
		);
	}

});

module.exports = TextArea;