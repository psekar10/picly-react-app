import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = (props) => {
	const pageCount = (props.itemsCount < props.pageSize) ? 0 : Math.ceil(props.itemsCount/props.pageSize);
	const pageArr = _.range(1,pageCount+1);

	return (
		<nav className="m-3">
		  <ul className="pagination">
		  	{pageArr.map(page => (
		  		<li key={page} className={props.currentPage===page ? "page-item active" : "page-item"}>
		  			<a onClick={() => props.onPageChange(page)} className="page-link">{page}</a>
		  		</li>
		  		)
		  	)}
		  </ul>
		</nav>
	);
};
Pagination.propTypes = {
	itemsCount: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired

};

export default Pagination;

