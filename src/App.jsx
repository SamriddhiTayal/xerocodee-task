// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Header from './components/Header';
// import List from './components/List';
// import Content from './components/Content';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Purpose from './components/Purpose';

function App() {
	return (
		<div>
			<Routes>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/'
					element={<Dashboard />}
				/>
				<Route
					path='/signup'
					element={<Signup />}
				/>
				<Route
					path='/purpose'
					element={<Purpose />}
				/>
			</Routes>
		</div>
	);
}

export default App;
