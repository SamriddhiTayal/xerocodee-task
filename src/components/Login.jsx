/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import { auth, provider } from '../config';
import { signInWithPopup } from 'firebase/auth';
import Dashboard from './Dashboard';
// import Purpose from './Purpose'

function Login() {
	const [value, setValue] = useState('');
	const handleClick = () => {
		signInWithPopup(auth, provider).then((data) => {
			setValue(data.user.email);
			localStorage.setItem('email', data.user.email);
		});
	};
	useEffect(() => {
		setValue(localStorage.getItem('email'));
	}, []);
	return (
		<div>
			{value ? (
				<Dashboard />
			) : (
				<div className="bg-[url('/assets/signup-bg.svg')] h-screen flex items-center justify-center">
					<div className='flex items-center justify-center  bg-white rounded-tr-3xl rounded-bl-3xl h-5/6'>
						<div className='form-container flex flex-col justify-center items-center p-8'>
							<img
								src='/assets/logo4.png'
								alt=''
								width={160}
								className='pb-4'
							/>
							<div className='flex flex-col items-center p-2 space-y-2'>
								<h1 className='font-semibold text-3xl'>Welcome!</h1>
								<p className='text-sm text-slate-500'>Login To Your Account</p>
							</div>
							<form
								action=''
								className='flex flex-col pt-16'>
								
								<input
									type='email'
									placeholder='Email-id'
									className='border border-gray-200 rounded p-2 pr-32 m-1'
								/>
								<input
									type='password'
									placeholder='Password'
									className='border border-gray-200 rounded p-2 m-1'
								/>
								
								<button className='bg-[#1F64FF] rounded text-white font-semibold py-2 m-1 '>
									SIGN UP
								</button>
								<p className='text-center text-sm font-semibold text-slate-500 p-4'>
									OR
								</p>
							</form>
							<div className='flex p-2'>
								<button
									className='text-sm text-slate-500 border border-[#C0C0C0] rounded flex items-center px-1 mr-1'
									onClick={handleClick}>
									<p>Login With Google </p>
									<img
										src='/assets/google-logo.svg'
										alt=''
									/>
								</button>
								<button className='text-sm text-slate-500 border border-[#C0C0C0] rounded flex items-center px-1 ml-1'>
									<p>Login With Github</p>
									<img
										src='/assets/github-logo.svg'
										alt=''
									/>
								</button>
							</div>
							<div className='flex justify-center'>
								<p className='text-sm text-slate-500'>
									Don't have an Account ?
								</p>
								<button className='text-sm text-[#1F64FF]'> SIGNUP </button>
							</div>
						</div>
						<div className='flex flex-col items-center justify-center p-3 h-full border-l-2 relative'>
							<img
								src='/assets/signup-image.svg'
								alt=''
								width={400}
								className=''
							/>
							<img
								src='/assets/signup-wave.svg'
								alt=''
								width={400}
								className='absolute bottom-0 right-0'
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
export default Login;
