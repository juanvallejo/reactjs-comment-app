
// import deps
var React 				= require('react');

/**
 * Main application wrapper. Root node of our document.body subtree
 */
var Comment = React.createClass({

	render: function() {
		return (
			<li className="comment">
				<span className="author">{this.props.author}</span>
				{this.props.children}
			</li>
		);
	}

});

module.exports = Comment;