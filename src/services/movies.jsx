import React , { Component } from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import _ from 'lodash';
import Pagination from '../services/common/pagination';
import MoviesTable from '../services/moviesTable';
import ListGroup from '../services/common/listGroup';
import {paginate} from '../utils/paginate';

class Movies extends Component {
	state = { 
		movies : [],
		count : getMovies().length,
		pageSize : 4,
		currentPage : 1,
		currentGenre : 'All Items',
		genre : [],
		sortColumn : {path:'title', order:'asc'}
	};

	componentDidMount() {
		const genres = [{name : 'All Items', _id : "qwerty123"}, ...getGenres()];
		this.setState({movies:getMovies(), genre:genres});
	}
	handleDelete = (movie) => {
		const newSetMovies = deleteMovie(movie._id);
		this.setState({movies:newSetMovies, count:newSetMovies.length});
	}
	getLiked = (movie) => {
		const movies = [...this.state.movies];
		const index = movies.indexOf(movie);
		movies[index] = {...movie};
		movies[index].liked = (!movies[index].liked) ? true : false;
		this.setState({movies});
	}
	handlePageChange = (page) =>  {
		this.setState({currentPage : page});
	}
	handleGenreSelect = (genre) => {
		this.setState({currentGenre : genre, currentPage : 1});
	}
	handleSort = (sortColumn) => {
		this.setState({ sortColumn });
	}
	getPageData = () => {
		const filtered = (this.state.currentGenre!=="All Items") ? this.state.movies.filter(m => (m.genre.name===this.state.currentGenre)) : this.state.movies;
		const sorted = _.orderBy(filtered, [this.state.sortColumn.path], [this.state.sortColumn.order]);
		const movies = paginate(sorted, this.state.currentPage, this.state.pageSize);
		return ({
			'filtered' : filtered,
			'sorted' : sorted,
			'movies' : movies
		})
	}

	render() {
		if (this.state.count === 0 ) {
			return <p>There is no movie in the rack!!</p>;
		}
		const result = this.getPageData();
		return (
			<div className="row m-3">
				<div className="col-3">
					<ListGroup genreList={this.state.genre} onItemSelect={this.handleGenreSelect} currentGenre={this.state.currentGenre}/>
				</div>
				<div className="col">
					<p>Showing {result.filtered.length} movies in the database.</p>
					<MoviesTable movies= {result.movies} sortColumn={this.state.sortColumn} onLiked={this.getLiked} onhandleDelete={this.handleDelete} onSort={this.handleSort}/>
	  				<Pagination itemsCount={result.filtered.length} currentPage={this.state.currentPage} pageSize={this.state.pageSize} onPageChange={this.handlePageChange}></Pagination>
				</div>

			</div>
		)
	}
}

export default Movies;