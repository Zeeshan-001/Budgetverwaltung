import React from 'react';

function Input(props) {
	return (
		<input
			id={props.label}
			min={props.min}
			max={props.max}
			type={props.type}
			name={props.name}
			value={props.value}
			checked={props.checked}
			onChange={props.onChange}
			className={props.className}
			placeholder={props.placeHolder}
		/>
	);
}

export default Input;
