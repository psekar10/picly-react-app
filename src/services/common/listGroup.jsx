import React from 'react';

const listGroup = (props) => {
  return (		
	<ul className="list-group">
	  {props.genreList.map(genre => (
 		<li key={genre._id} style={{cursor:'pointer'}} className={genre.name === props.currentGenre ? "list-group-item active":"list-group-item"} onClick={() => props.onItemSelect(genre.name)}>{genre.name}</li>
	  ))};
	</ul>
  )
}

export default listGroup;				