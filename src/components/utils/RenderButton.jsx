import React from 'react';

function RenderButton({ label, onClick }) {
	return (
		<div className='btn__Main' onClick={onClick}>
			{label}
		</div>
	);
}

export default RenderButton;
