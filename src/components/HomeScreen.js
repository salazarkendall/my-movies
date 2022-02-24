import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { Carousel } from './ui/Carousel';

export const HomeScreen = () => {
	const { data } = useFetch(
		'https://api.themoviedb.org/3/movie/now_playing?api_key=b7bf52445708034ddb6908183dba78ec&language=en-US&page=1	'
	);
	return <Carousel data={data} title={`NEW MOVIES`} />;
};
