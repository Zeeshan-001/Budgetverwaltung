import React from 'react';

function Backdrop(props) {
	return <div className='backdrop' onClick={props.onConfirm} />;
}

export default Backdrop;
