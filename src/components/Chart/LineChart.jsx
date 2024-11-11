import React, { useContext } from 'react';
import TransContext from '../../store/trans-context';

function LineChart(props) {
	const ctx = useContext(TransContext);

	const income = ctx.totalTransactions
		.filter((tr) => tr.type === 'income')
		.reduce((acc, mov) => acc + mov.amount, 0);

	const expense = ctx.totalTransactions
		.filter((tr) => tr.type === 'expense')
		.reduce((acc, mov) => acc + mov.amount, 0);

	return (
		<div className='lineChart mb-m'>
			<div
				className='lineChart__incoming'
				style={{ width: `${income}%` }}
				title='Income'></div>

			<div
				className='lineChart__outgoing'
				style={{ width: `${expense}%` }}
				title='Expenses'></div>
		</div>
	);
}

export default LineChart;
