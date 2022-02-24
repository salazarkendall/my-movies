import React from 'react';
import { MovieCover } from './MovieCover';

export const Carousel = ({ data, title }) => {
	return (
		<div className="container-center">
			<div className="container column ">
				<h1 className="main__title">{title}</h1>
				<div className="container movie__container">
					{data?.results.map((movie) => (
						<MovieCover key={movie.id} {...movie} />
					))}
				</div>
			</div>
		</div>
	);
};
