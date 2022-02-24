import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
	const isMounted = useRef(true);

	useEffect(() => {
		// No side effects, then, cleanup:
		return () => {
			isMounted.current = false;
		};
	}, []);

	const [state, setState] = useState({
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		setState({
			...state,
			loading: true,
		});

		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				isMounted.current &&
					setState({
						data: data,
						loading: false,
						error: null,
					});
			})
			.catch(() => {
				setState({
					data: null,
					loading: false,
					error: 'Couldnt get data',
				});
			});
	}, [url]);

	return state;
};
