
// import deps
var React 				= require('react');
var CommentsContainer 	= require('./CommentsContainer');
var Comment 			= require('./Comment.jsx');

/**
 * Main application wrapper. Root node of our document.body subtree
 */
var CommentsList = React.createClass({

	render: function() {

		var commentId = 0;
		
		var commentNodes = this.props.data.map(function(comment) {

			commentId++;

			return (

				<Comment key={commentId} author={comment.author}>
					<span className="text">{comment.text}</span>
				</Comment>

			);

		});

		return (

			<CommentsContainer>
				{commentNodes}
			</CommentsContainer>

		);

	}

});

module.exports = CommentsList;