import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadUserLists } from '../../helpers/listHelpers';

export const Detail = ({ title, poster_path, overview, vote_average }) => {
	const navigate = useNavigate();
	const [lists, setLists] = useState([]);
	const { uid } = useSelector((state) => state.auth);

	const [selectedOption, setSelectedOption] = useState('');

	const handleBack = () => navigate(-1);

	const handleSelect = ({ target }) => setSelectedOption(target.value);

	const handleAdd = () => {};

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
								<option key={list} value={list}>
									{list}
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
