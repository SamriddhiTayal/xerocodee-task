function Purpose() {
	return (
		<div className="bg-[url('/assets/signup-bg.svg')] h-screen flex items-center justify-center">
			<div className='flex flex-col items-center   bg-white rounded-3xl h-3/4 w-9/12'>
				<img
					src='/assets/logo4.png'
					alt=''
					className='py-3'
				/>
				<p className='font-semibold text-3xl'>Welcome!</p>
				<p className='text-sm font-semibold text-slate-500'>
					Choose From The Following
				</p>
				<div className='flex justify-around w-full pt-16'>
					<button className='border border-[#C0C0C0] rounded text-[#000022] font-semibold text-base px-16 py-3'>
						Developer
					</button>
					<button className='border border-[#C0C0C0] rounded text-[#000022] font-semibold text-base px-16 py-3'>
						Organisation
					</button>
					<button className='border border-[#C0C0C0] rounded text-[#000022] font-semibold text-base px-16 py-3'>
						Company
					</button>
				</div>
				<form
					action=''
					className='p-20'>
					<input
						type='text'
						placeholder='Organisation Name'
						className='border border-gray-200 rounded p-3 pr-32 m-1 text-sm'
					/>
					<button className='bg-[#1F64FF] rounded text-white font-semibold p-3 px-4 m-1 text-sm'>
						SUMIT
					</button>
				</form>
			</div>
		</div>
	);
}
export default Purpose;
