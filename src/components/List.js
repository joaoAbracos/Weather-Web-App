import React from 'react';
import CityItem from './CityItem';
import { useSelector } from 'react-redux';
import {Oval } from 'react-loader-spinner';
const List = () => {
	const city = useSelector((state) => state.city);
	const isLoading = useSelector((state) => state.loading);
	if (isLoading) {
		return <div><Oval center color="#00BFFF" height={40} width={40} /></div>;
	}
	return (
		<ul className='list-group'>
			{city.map((val) => (
				<CityItem key={val.id} id={val.id} city={val.city} country={val.country} completed={val.completed} />
			))}
		</ul>
	);
};

export default List;
