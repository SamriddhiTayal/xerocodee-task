function Signup() {
	return (
		<div className="bg-[url('../../public/assets/signup-bg.svg')] h-screen flex items-center justify-center">
			<div className='flex items-center justify-center  bg-white rounded-tr-3xl rounded-bl-3xl h-5/6'>
				<div className='form-container flex flex-col justify-center items-center p-8'>
					<img
						src='../../public/assets/logo4.png'
						alt=''
						width={160}
						className='pb-4'
					/>
					<div className='flex flex-col items-center p-2 space-y-2'>
						<h1 className='font-semibold text-3xl'>Hello!</h1>
						<p className='text-sm text-slate-500'>Create Your Account</p>
					</div>
					<form
						action=''
						className='flex flex-col'>
						<input
							type='text'
							placeholder='First Name'
							className='border border-gray-200 rounded p-2 pr-32 m-1'
						/>
						<input
							type='text'
							placeholder='Last Name'
							className='border border-gray-200 rounded p-2 m-1'
						/>
						<input
							type='email'
							placeholder='Email-id'
							className='border border-gray-200 rounded p-2 m-1'
						/>
						<input
							type='password'
							placeholder='Password'
							className='border border-gray-200 rounded p-2 m-1'
						/>
						<input
							type='password'
							placeholder='Confirm Password'
							className='border border-gray-200 rounded p-2 m-1'
						/>
						<button className='bg-[#1F64FF] rounded text-white font-semibold py-2 m-1 '>
							SIGN UP
						</button>
						<p className='text-center text-sm font-semibold text-slate-500'>
							OR
						</p>
					</form>
					<div className='flex p-2'>
						<button className='text-sm text-slate-500 border border-[#C0C0C0] rounded flex items-center p-1 mr-1'>
							<p>Sign Up With Google </p>
							<img
								src='../../public/assets/google-logo.svg'
								alt=''
							/>
						</button>
						<button className='text-sm text-slate-500 border border-[#C0C0C0] rounded flex items-center p-1 ml-1'>
							<p>Sign Up With Github</p>
							<img
								src='../../public/assets/github-logo.svg'
								alt=''
							/>
						</button>
					</div>
					<div className='flex justify-center'>
						<p className='text-sm text-slate-500'>Already have an Account ? </p>{' '}
						<button className='text-sm text-[#1F64FF]'> LOGIN </button>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center p-3 h-full border-l-2 relative'>
					<img
						src='../../public/assets/signup-image.svg'
						alt=''
						width={400}
						className=''
					/>
					<img
						src='../../public/assets/signup-wave.svg'
						alt=''
						width={400}
						className='absolute bottom-0 right-0'
					/>
				</div>
			</div>
		</div>
	);
}
export default Signup;
