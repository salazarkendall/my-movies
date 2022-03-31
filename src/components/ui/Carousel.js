import React from 'react';
import { MovieCover } from './MovieCover';

export const Carousel = ({ data, title }) => {
	return (
		<div className="container-center animate__animated animate__fadeIn">
			<div className="container column ">
				<h1 className="main__title">{title}</h1>
				<div className="container movie__container">
					{data?.results.map((movie) => {
						return <MovieCover key={movie.id} {...movie} />;
					})}
				</div>
			</div>
		</div>
	);
};
