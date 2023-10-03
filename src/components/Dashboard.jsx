/* eslint-disable react/prop-types */
import Header from '../components/Header';
import List from '../components/List';
import Content from '../components/Content';

function Dashboard(props) {
	const name = props.name;
	return (
		<div>
			<Header />
			<div className='flex'>
				<List />
				<Content name = {name}/>
			</div>
		</div>
	);
}

export default Dashboard;
