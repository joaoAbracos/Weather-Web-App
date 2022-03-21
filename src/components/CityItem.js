import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteCity } from '../redux/city.slice';
import { useAlert } from 'react-alert';
import '../css/Item.css'

const CityItem = ({ id, city, country, completed }) => {
	const dispatch = useDispatch();
	const alert = useAlert();
	const handleCompleteClick = () => {
		dispatch(
			toggleComplete({
				id: id, completed: completed
			})
		);
	};
	const handleDeleteClick = () => {
		dispatch(
			deleteCity({
				id: id,
			})
		)
		alert.show('City deleted from List',{ type: 'info' })
	};
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
			<input type='checkbox' style={{alignSelf: "center"}} className='mr-3' checked={completed} onChange={handleCompleteClick}></input>
				<span className='d-flex align-items-center' style={{fontWeight:'700'}}>
					{city}({country})
				</span>
				<button className='btn btn-danger' onClick={handleDeleteClick}>Delete</button>
			</div>
		</li>
	);
};

export default CityItem;
