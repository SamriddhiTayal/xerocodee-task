/* eslint-disable react/prop-types */
import Header from '../components/Header';
import List from '../components/List';
import Content from '../components/Content';
// import Login from '../components/Login';

function Dashboard(props) {
	const name = props.name;
	console.log(name);
	return (
		// <>
		// 	{name ? (
		// 		<div>
		// 			<Header />
		// 			<div className='flex'>
		// 				<List />
		// 				<Content name={name} />
		// 			</div>
		// 		</div>
		// 	) : (
		// 		<Login />
		// 	)}
		// </>
		<div>
			<Header />
			<div className='flex'>
				<List />
				<Content name={name} />
			</div>
		</div>
	);
}

export default Dashboard;
