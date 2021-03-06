import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreateList } from '../../actions/list';
import { useForm } from '../../hooks/useForm';
import { ListTable } from './ListTable';

export const ListForm = () => {
	const dispatch = useDispatch();
	const { lists } = useSelector((state) => state.list);

	const [formValues, handleInputChange, resetInputs] = useForm({
		listName: '',
	});

	const { listName } = formValues;

	const handleCreateList = () => {
		resetInputs();
		dispatch(startCreateList(listName));
	};

	return (
		<div>
			<h2>Create List</h2>
			<input
				autoComplete="off"
				className="form-input"
				name="listName"
				onChange={handleInputChange}
				placeholder="List name"
				value={listName}
			/>
			<button className="btn btn--success" onClick={handleCreateList}>
				Create
			</button>
			{lists.length === 0 ? (
				<p>You don't have any list yet</p>
			) : (
				<ListTable lists={lists} />
			)}
		</div>
	);
};
