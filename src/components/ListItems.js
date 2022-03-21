import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

const ListItems = () => {
	const city = useSelector((state) => state.city);
	return (
		<>
			{city.map((val) => (
				val.completed === true ?
					<Card key={val.id} data={val.data} />
					: ""
			))}
		</>
	)
};

export default ListItems;