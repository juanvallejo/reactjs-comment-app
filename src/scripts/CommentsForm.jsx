
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

	authorInput: null,
	textArea: null,

	getAuthorContext: function(context) {
		this.authorInput = context;
	},
	getTextAreaContext: function(context) {
		this.textArea = context;
	},
	getAuthorInput: function() {
		return (
			this.authorInput
		);
	},
	getTextArea: function() {
		return (
			this.textArea
		);
	},
	addComment: function() {
		this.getAuthorInput().clearInputValue();
		this.getTextArea().clearInputValue();
		this.props.addComment();
	},
	render: function() {

		return (
			<div className="comments-form">
				<form>
					<AuthorInput userInput={this.props.userInput} getContext={this.getAuthorContext}/>
					<TextArea userInput={this.props.userInput} getContext={this.getTextAreaContext}/>
				</form>
				<SubmitButton userInput={this.props.userInput} data={this.props.data} addComment={this.addComment}/>
			</div> // <!--#form-->
		);
	}

});

module.exports = CommentsForm;