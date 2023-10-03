import Header from '../components/Header';
import List from '../components/List';
import Content from '../components/Content';

function Dashboard() {
	return (
		<div>
			<Header />
			<div className='flex'>
				<List />
				<Content />
			</div>
		</div>
	);
}

export default Dashboard;
