
// import deps
var React 				= require('react');

/**
 * Main application wrapper. Root node of our document.body subtree
 */
var SubmitButton = React.createClass({

	handleClick: function() {
		this.props.addComment();
	},

	render: function() {
		return (
			<span id="submit" onClick={this.handleClick}>
				Submit
			</span>
		);
	}

});

module.exports = SubmitButton;