import React, {Component} from 'react';
import Movie from './Movie.jsx';

class MoviesResults extends Component{
	
	render(){
		return(
			<div>
				<h3 className="text-center">Results</h3>
                {
                    this.props.moviesList.map(movie => {
                        return <Movie movie={movie} key={movie.imdbID} />
                    })
                } 
			</div>
		)
	}
}

export default MoviesResults