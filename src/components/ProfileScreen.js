import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../actions/auth';
import { ListForm } from './lists/ListForm';
export const ProfileScreen = () => {
	const { name } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(startLogout());
	};

	return (
		<div className="animate__animated animate__fadeIn">
			<h1>ProfileScreen</h1>
			<p>{name}</p>
			<button className="btn btn--error" onClick={handleLogout}>
				Logout
			</button>

			<ListForm />
		</div>
	);
};
