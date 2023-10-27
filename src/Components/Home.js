import React, { useState } from 'react';
import '../Css/Home.css';
import { Navigate } from 'react-router';
import { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'; // Alan AI
import { useNavigate } from 'react-router-dom';

function App() {
	const navigate = useNavigate();
	useEffect(() => {
		alanBtn({
			key: '460d9e4985338b4573109176515f7b9e2e956eca572e1d8b807a3e2338fdd0dc/stage',
			onCommand: ({ command }) => {
				if (command === 'sendCommand') {
					navigate('/send');
				} else if (command === 'downloadCommand') {
					navigate('/download');
				} else if (command === 'homeCommand') {
					navigate('/');
				}
			},
		});
	}, [navigate]);
	const [redirect, setRedirect] = useState({
		sendRedirect: false,
		recieveRedirect: false,
	});
	const handleOnClickSend = () => {
		setRedirect((prev) => ({ ...prev, sendRedirect: true }));
	};
	const handleOnClickRecieve = () => {
		setRedirect((prev) => ({ ...prev, recieveRedirect: true }));
	};

	if (redirect.sendRedirect) {
		return <Navigate to='/send' />;
	} else if (redirect.recieveRedirect) {
		return <Navigate to='/download' />;
	}

	return (
		<div className='MainContainer'>
			<div className='centralPanel'>
				<div className='panelContent'>
					<h1>SimpleShare.</h1>
					<p>
						A file sharing app which allows you to upload and share a file from
						your pc or mobile and transfer it to anyone across the internet
						quickly and easily.
					</p>
					<div className='lead'>
						<div className='Selection'>
							<button
								id='send'
								className='Selection-button'
								onClick={handleOnClickSend}
							>
								Send File
							</button>{' '}
							<br />
							<button
								id='recieve'
								className='Selection-button'
								onClick={handleOnClickRecieve}
							>
								Download File
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='imgPanel'>
				<img
					src={require('./image/landing.jpg')}
					alt='sharing file'
					className='landingImage'
				/>
			</div>
		</div>
	);
}

export default App;

