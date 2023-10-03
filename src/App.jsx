// import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
// import Header from './components/Header';
// import List from './components/List';
// import Content from './components/Content';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Purpose from './components/Purpose'

function App() {
	return (
		<div>
			<Routes>
				<Route
					path='/'
					element={<Login />}
				/>
				<Route
					path='/dashboard'
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
			{/* <Dashboard/> */}
			{/* <Signup/> */}
			{/* <Login/> */}
			{/* <Purpose/> */}
		</div>
	);
}

export default App;
