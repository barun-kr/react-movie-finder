import React, {Component} from 'react';
import SearchForm from './SearchForm.jsx';
import MoviesResults from './MoviesResults.jsx';

class App extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			title: '',
			moviesList :[]
		}
	}
	
	handleFormSubmit(title){
		this.setState({title : title}, function (){
			this.getMovieDetail();
		})
	}
	
	getMovieDetail(){
		$.ajax({
			url : 'http://omdbapi.com/?s=' + this.state.title,
			dataType: 'json',
			cache: false,
			success : function(data) {
				this.setState({
					moviesList : data.Search
				});
			}.bind(this),
			error : function (xhr, status, err){
				this.setState({
					moviesList: null
				});
			}.bind(this)
		});
	}
	
	render(){
		if(this.state.moviesList == ''){
			var movieResults = '';
		} else {
			var movieResults = <MoviesResults moviesList={this.state.moviesList} />;
		}
		return(
			<div>
				<SearchForm onFormSubmit={this.handleFormSubmit.bind(this)} />
				{movieResults} 
			</div>
		)
	}
}

export default App