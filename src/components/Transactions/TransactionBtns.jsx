import React from 'react';
import RenderButton from '../utils/RenderButton';
import { TiEdit } from 'react-icons/ti';
import { RiDeleteBin7Line } from 'react-icons/ri';

function TransactionBtns({ onEdit, onDelete, item }) {
	return (
		<div className='transaction__btns'>
			<RenderButton label={<TiEdit />} onClick={() => onEdit(item)} />
			<RenderButton
				label={<RiDeleteBin7Line />}
				onClick={() => onDelete(item)}
			/>
		</div>
	);
}

export default TransactionBtns;
