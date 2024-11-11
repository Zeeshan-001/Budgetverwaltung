import React from 'react';

function Label({ label, className }) {
	return (
		<label htmlFor={label} className={className}>
			{label}
		</label>
	);
}

export default Label;
