import React from 'react';
import { useContext } from 'react';
import TransContext from '../../store/trans-context';
import RenderButton from '../utils/RenderButton';

function TransEmpty(props) {
	const { handleTransModel } = useContext(TransContext);

	return (
		<div className='transactions__empty'>
			<p className='paragraph'>
				Click Button below to add your first transaction
			</p>

			<RenderButton label='+ ADD' onClick={() => handleTransModel('income')} />
		</div>
	);
}

export default TransEmpty;
