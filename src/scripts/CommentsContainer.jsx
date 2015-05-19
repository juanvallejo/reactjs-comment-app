
// import deps
var React 				= require('react');

/**
 * Main application wrapper. Root node of our document.body subtree
 */
var CommentsContainer = React.createClass({

	render: function() {
		return (
			<ul className="comments-container">
				{this.props.children}
			</ul>
		);
	}

});

module.exports = CommentsContainer;