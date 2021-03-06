
// import deps
var React 				= require('react');

/**
 * Main application wrapper. Root node of our document.body subtree
 */
var AuthorInput = React.createClass({

	clearInputValue: function() {
		this.setState({value: ''});
	},
	getInitialState: function() {
		return {
			value: ''
		}
	},
	handleChange: function(changeEvent) {
		this.props.userInput.author = changeEvent.target.value;
		this.setState({value: changeEvent.target.value});
	},
	render: function() {

		this.props.getContext(this);

		return (
			<input className="author-input" ref="author" type="text" placeholder="Enter your name..." value={this.state.value} onChange={this.handleChange}/>
		);
	}

});

module.exports = AuthorInput;