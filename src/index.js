var React = require('react');
var ReactDOM = require('react-dom');
var Show = require('./Show');
// var createClass = require('create-react-class');
var shows = require('./shows');

ReactDOM.render(
	<Show shows={shows} />, 
	document.getElementById('root')
);