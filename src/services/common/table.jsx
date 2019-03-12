import React from 'react';
import TableHeader from '../common/tableHeader';
import TableBody from '../common/tableBody';

const Table = (props) => {
  const {movies, onLiked, onhandleDelete, sortColumn, onSort, columns} = props;
  return (
		<table className="table">
			<TableHeader columns={columns} sortColumn ={sortColumn} onSort={onSort}/>
			<TableBody movies={movies} onLiked={onLiked} onhandleDelete={onhandleDelete}/>
		</table>
  )
}

export default Table;