import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startAddMovie } from '../../actions/list';
import { getMovieDocument, loadUserLists } from '../../helpers/listHelpers';

export const Detail = ({ title, poster_path, overview, vote_average }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [lists, setLists] = useState([]);
	const { uid } = useSelector((state) => state.auth);

	const [selectedOption, setSelectedOption] = useState('');

	const handleBack = () => navigate(-1);

	const handleSelect = ({ target }) => {
		console.log(target.value);
		setSelectedOption(target.value);
	};

	const handleAdd = () => {
		// startAddMovie();
		dispatch(startAddMovie(title, selectedOption));
		getMovieDocument(uid, selectedOption);
	};

	useEffect(() => {
		loadUserLists(uid).then((myLists) => {
			setLists(myLists);
		});
	}, [uid]);

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
					></i>
					{vote_average}
				</span>
				<p className="detail-overview">{overview}</p>

				<button onClick={handleBack} className="btn btn--error">
					BACK
				</button>
				{uid ? (
					<>
						<select name="lists" onChange={handleSelect}>
							<option value="" selected disabled hidden>
								Add
							</option>
							{lists.map((list) => (
								<option key={list.id} value={list.id}>
									{list.name}
								</option>
							))}
						</select>

						<button
							onClick={handleAdd}
							className="btn btn--success"
						>
							ADD
						</button>
					</>
				) : (
					<button onClick={handleBack} className="btn btn--primary">
						ADD
					</button>
				)}
			</div>
		</div>
	);
};
