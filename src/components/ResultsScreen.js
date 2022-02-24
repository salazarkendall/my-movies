import React from 'react';
import queryString from 'query-string';
import { useFetch } from '../hooks/useFetch';
import { Carousel } from './ui/Carousel';
import { useLocation } from 'react-router-dom';

export const ResultsScreen = () => {
	const location = useLocation();
	const { q = '' } = queryString.parse(location.search);

	const { data } = useFetch(
		`https://api.themoviedb.org/3/search/movie?api_key=b7bf52445708034ddb6908183dba78ec&page=1&include_adult=false&query=${q}`
	);

	return <Carousel data={data} title={`${q.toUpperCase()}`} />;
};
