import React from 'react';
import AddForm from './components/AddForm';
import List from './components/List';
import ListItems from './components/ListItems';
import CardList from './components/CardList'
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from './components/NavBar';
import './App.css';
const App = () => {
	return (
		<>
			<NavBar />
			<Container center className='mh-100 fluid'>
				<Row>
					<Col>
						<div className='Card'>
							<h3>Search City</h3>
							<AddForm />
							<List />
						</div>
					</Col>
					<Col>
						<ListItems />
					</Col>
				</Row>
				<Row>
					<CardList />
				</Row>
			</Container>
		</>

	);
};

export default App;
