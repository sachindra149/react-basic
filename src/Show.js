var React = require('react');
var createClass = require('create-react-class');


var Title = createClass({
	render: function(){
		return (
			<h3>{this.props.showTitle}</h3>
		);
	}
});

var Poster = createClass({
	render: function(){
		return (
			<img src={this.props.showPoster} alt="Title of the show" title="Title of the show" style={{height: 300}} />
		);
	}
});

var ShowInfo = createClass({
	render: function(){
		return (
			<div>
				<p>{this.props.showPlot}</p>
				<h5>IMDB Rating: {this.props.showRating}</h5>
			</div>
		);
	}
});

var Show = createClass({
	getInitialState: function(){
		return {
			showIndex: 0
		};
	},
	handleButtonClick: function(){
		var totalShows = this.props.shows.length;
		this.setState(function(prevState){
			return {
				showIndex: (prevState.showIndex + 1) % totalShows,
			};
		});
	},
	render: function(){
		var show = this.props.shows[this.state.showIndex];
		return (
			<div>
				<Title showTitle={show.title} />
				<Poster showPoster={show.poster} />
				<ShowInfo showPlot={show.plot} showRating={this.imdbRating} />
				<button onClick={this.handleButtonClick}>Next Show</button>
			</div>
		);
	}
});

module.exports = Show;