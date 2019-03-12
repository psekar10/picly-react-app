import React, { Component } from 'react';
import Table from './common/table';

class MoviesTable extends Component {
	columns = [
		{path: 'title', label: 'Title'},
		{path: 'genre.name', label: 'Genre'},
		{path: 'numberInStock', label: 'Stock'},
		{path: 'dailyRentalRate', label: 'Rate'},
		{key: 'like'},
		{key: 'delete'}
	];
	render() {
		const {movies, onLiked, onhandleDelete, sortColumn, onSort} = this.props;
		return (
				<Table 
					columns={this.columns} 
					sortColumn ={sortColumn} 
					onSort={onSort} 
					movies={movies} 
					onLiked={onLiked} 
					onhandleDelete={onhandleDelete}
				/>
		)
	}
}

export default MoviesTable;