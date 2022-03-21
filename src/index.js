import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Part1 from './components/Part1';

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
export const types = {
	INFO: 'info',
	SUCCESS: 'success',
	ERROR: 'error'
  }
const options = {
	position: positions.TOP_CENTER,
	timeout: 3000,
	offset: '30px',
	transition: transitions.SCALE
}
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<AlertProvider template={AlertTemplate} {...options}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<App />} />
						<Route path="/part1" element={<Part1 />} />
						<Route path="/part2" element={<App />} />
					</Routes>
				</BrowserRouter>
			</AlertProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
