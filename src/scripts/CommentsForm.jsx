
// import deps
var React 				= require('react');
var SubmitButton 		= require('./SubmitButton.jsx');
var AuthorInput 		= require('./AuthorInput.jsx');
var TextArea 			= require('./TextArea.jsx');

/**
 * HTML form for submitting new comments.
 * Adds comments to the screen optimistically,
 * then uses local storage in the browser for
 * permanent storage.
 */
var CommentsForm = React.createClass({

	render: function() {
		return (
			<div className="comments-form">
				<form>
					<AuthorInput userInput={this.props.userInput}/>
					<TextArea userInput={this.props.userInput}/>
				</form>
				<SubmitButton userInput={this.props.userInput} data={this.props.data} addComment={this.props.addComment}/>
			</div> // <!--#form-->
		);
	}

});

module.exports = CommentsForm;