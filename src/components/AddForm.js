import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAsync } from '../redux/city.slice';
import { useAlert } from 'react-alert'
import '../css/Form.css'
const AddForm = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const alert = useAlert();
	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(
			addAsync({
				city: value,
			})
		).then(res => {
			if (res.payload.error === false) {
				alert.show('Error! Add valid City',{ type: 'error' });
			} else {
				alert.show('New City in List',{ type: 'success' });
			}
		}).catch(err => {
			alert.show('Error!')
		});
		setValue('')
	};

	return (
		<form onSubmit={onSubmit} className='text-center mt-3 mb-3'>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add city...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button type='submit' className='btn btn-primary mb-2'>
				Add City
			</button>
		</form>
	);
};

export default AddForm;
