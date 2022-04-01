import React from 'react';

export const ListTable = ({ lists }) => {
	return (
		<div>
			<h3>ListTable</h3>
			<ul>
				{lists.map((list) => (
					<div>
						<h4>{list.name}</h4>
						{list.movies.map((movie) => (
							<p>{movie}</p>
						))}
					</div>
				))}
			</ul>
		</div>
	);
};
