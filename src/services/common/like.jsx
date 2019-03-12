import React from 'react';

const Like = (props) => {
	const {movie, onLiked} = props;
	let classes = "fa fa-heart";
	if (!movie.liked) classes += "-o"
	return (
		<i onClick={() => onLiked(movie)} style={{cursor:'pointer'}} className={classes}></i>
	);

}


export default Like;