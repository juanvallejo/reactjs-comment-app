
// import deps
var React 				= require('react');
var WidgetContainer 	= require('./WidgetContainer.jsx');

/**
 * Main application component. Root node of our document.body subtree
 */
var ApplicationWrapper = React.createClass({

	getInitialState: function() {
		return {
			data: this.props.data
		}
	},
	render : function() {
		return (
			<div id="wrapper">
				<div id="title">Comments</div>
				<WidgetContainer userInput={this.props.userInput} data={this.props.data} addComment={this.props.addComment}/>
			</div> // <!--#wrapper-->
		);
	}

});

module.exports = ApplicationWrapper;