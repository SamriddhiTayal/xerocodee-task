import { useState } from 'react';

function List() {
	const [clicked, setClicked] = useState();
	const services = [
		{
			title: 'XeroCodee',
			id: '0',
			logo: '/assets/xerocode-logo.svg',
		},
		{
			title: 'Builder Center',
			id: '1',
			logo: '/assets/builder-center-logo.svg',
		},
		{
			title: 'Servive Board',
			id: '2',
			logo: '/assets/service-board-logo.svg',
		},
		{
			title: 'Clusters',
			id: '3',
			logo: '/assets/clusters-logo.svg',
		},
		{
			title: 'Databases',
			id: '4',
			logo: '/assets/database-logo.svg',
		},
		{
			title: 'Environment',
			id: '5',
			logo: '/assets/environment-logo.svg',
		},
		{
			title: 'Workflow',
			id: '6',
			logo: '/assets/workflow-logo.svg',
		},
		{
			title: 'Monitoring',
			id: '7',
			logo: '/assets/monitoring-logo.svg',
		},
		{
			title: 'Security',
			id: '8',
			logo: '/assets/security-logo.svg',
		},
		{
			title: 'Web Hooks',
			id: '9',
			logo: '/assets/web-hooks-logo.svg',
		},
		{
			title: 'Log Error',
			id: '10',
			logo: '/assets/log-error-logo.svg',
		},
	];

	return (
		<>
			<div className='pt-3'>
				<ul>
					{services.map((service) => (
						<li
							key={service.id}
							className='hover:bg-white rounded-3xl px-3 py-2 my-2 ml-2 flex relative'
							onMouseEnter={() => setClicked(service.id)}
							onMouseLeave={() => setClicked(null)}>
							<img
								src={service.logo}
								alt='logo'
								height={20}
								width={20}
								className='pr-1 mr-2'
							/>
							<p>{service.title}</p>
							{/* <a href={service.id}>{service.title}</a> */}
							{clicked === service.id ? (
								<div className='bg-white h-3 w-20 absolute top-1/2 -z-10 -right-14 -translate-y-1/2 '></div>
							) : null}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
export default List;
