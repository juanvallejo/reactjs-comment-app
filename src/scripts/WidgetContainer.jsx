
// import deps
var React 			= require('react');
var CommentsList	= require('./CommentsList.jsx');
var CommentsForm	= require('./CommentsForm.jsx');

/**
 * Main application wrapper. Root node of our document.body subtree
 */
var WidgetContainer = React.createClass({

	render: function() {
		return (
			<div id="widget">
				<CommentsList data={this.props.data} addComment={this.props.addComment}/>
				<CommentsForm userInput={this.props.userInput} data={this.props.data} addComment={this.props.addComment}/>
			</div>
		);
	}

});

module.exports = WidgetContainer;