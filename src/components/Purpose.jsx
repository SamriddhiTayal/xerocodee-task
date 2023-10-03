import { useState } from 'react';

function Purpose() {
	const [placeholder, setPlaceholder] = useState('');
	return (
		<div className="bg-[url('/assets/signup-bg.svg')] h-screen flex items-center justify-center">
			<div className='flex flex-col items-center   bg-white rounded-3xl h-3/4 w-9/12'>
				<img
					src='/assets/logo4.png'
					alt=''
					className='py-3'
				/>
				<p className='font-semibold text-3xl'>Welcome!</p>
				<div className='flex flex-col items-center p-2 space-y-2'>
					<h1 className='font-semibold text-3xl'>Hello!</h1>
					<div className='flex items-center justify-center space-x-2'>
						<div className='bg-slate-200 w-32 h-0.5'></div>
						<p className='text-sm text-slate-500'>Choose From The Following</p>
						<div className='bg-slate-200 w-32 h-0.5'></div>
					</div>
				</div>
				<div className='flex justify-around w-full pt-16'>
					<button
						className='border border-[#C0C0C0] rounded text-[#000022] font-semibold text-base px-16 py-3'
						onClick={() => {
							setPlaceholder('');
						}}>
						Developer
					</button>
					<button
						className='border border-[#C0C0C0] rounded text-[#000022] font-semibold text-base px-16 py-3'
						onClick={() => {
							setPlaceholder('Organisation');
						}}>
						Organisation
					</button>
					<button
						className='border border-[#C0C0C0] rounded text-[#000022] font-semibold text-base px-16 py-3'
						onClick={() => {
							setPlaceholder('Company');
						}}>
						Company
					</button>
				</div>
				{placeholder !== '' ? (
					<form className='p-20'>
						<input
							type='text'
							placeholder={`${placeholder} Name`}
							className='border border-gray-200 rounded p-3 pr-32 m-1 text-sm'
						/>
						<button className='bg-[#1F64FF] rounded text-white font-semibold p-3 px-4 m-1 text-sm'>
							SUMIT
						</button>
					</form>
				) : null}
			</div>
		</div>
	);
}
export default Purpose;
