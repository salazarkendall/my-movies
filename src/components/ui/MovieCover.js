import React from 'react';
import { Link } from 'react-router-dom';

export const MovieCover = ({ id, title, poster_path }) => {
	return (
		<Link to={`/movie/${id}`}>
			<img
				className="movie zoomIn"
				src={`https://image.tmdb.org/t/p/w500${poster_path}`}
				alt={title}
			/>
		</Link>
	);
};
