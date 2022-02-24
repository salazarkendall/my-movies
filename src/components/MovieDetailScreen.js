import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

import { Detail } from './ui/Detail';

export const MovieDetailScreen = () => {
	const { id } = useParams();

	const { data, loading } = useFetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=b7bf52445708034ddb6908183dba78ec&language=en-US`
	);

	!loading && console.log(data.title);

	return <div>{!loading && <Detail {...data} />}</div>;
};
