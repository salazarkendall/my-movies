import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Detail = ({ title, poster_path, overview, vote_average }) => {
	const navigate = useNavigate();

	const handleBack = () => navigate(-1);

	return (
		<div className="detail-center">
			<img
				className="movie"
				src={`https://image.tmdb.org/t/p/w500${poster_path}`}
				alt={title}
			/>
			<div className="text-container">
				<h1>{title.toUpperCase()}</h1>
				<hr />
				<br />
				<span>
					<i
						className="fa-solid fa-star"
						style={{ color: 'yellow' }}
					></i>{' '}
					{vote_average}
				</span>
				<p className="detail-overview">{overview}</p>
				<button onClick={handleBack} className="outline-button">
					BACK
				</button>
			</div>
		</div>
	);
};
