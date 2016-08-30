import React, {Component} from 'react';

class SearchForm extends Component{
	
	onSubmit(e){
		e.preventDefault();
		let title = this.refs.title.value.trim();
		if(!title){
			alert('Please enter a title');
		}
		this.props.onFormSubmit(title);
		this.refs.title.value = '';
	}
	
	render(){
		return(
			<div>
				<div className="search-form">
					<h1 className="text-center">Search for a Movie</h1>
					<form onSubmit={this.onSubmit.bind(this)}>
						<div className="form-group">
							<input type="text" className="form-control" ref="title" placeholder= "Enter a Movie Title" />
						</div>
						<button className="btn btn-primary btn-block">Search</button>
					</form>
				</div>
			</div>
		)
	}
}

export default SearchForm