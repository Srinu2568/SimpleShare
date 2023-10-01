import React, { useEffect } from 'react';

const AdsComponent = (props) => {
	const { dataAdSlot } = props;

	useEffect(() => {
		try {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (e) {}
	}, []);

	return (
		<div
			style={{
				position: 'fixed',
			}}
		>
			<ins
				className='adsbygoogle'
				style={{ display: 'block' }}
				data-ad-client='ca-pub-1468195939609204'
				data-ad-slot={dataAdSlot}
				data-ad-format='auto'
				data-full-width-responsive='true'
			></ins>
		</div>
	);
};

export default AdsComponent;
