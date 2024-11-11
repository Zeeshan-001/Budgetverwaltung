import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../utils/Backdrop';
import TransactionModel from '../TransactionModel/TransactionModel';

function AddTransModel() {
	return (
		<div className='expenseModel'>
			{ReactDOM.createPortal(
				<Backdrop />,
				document.getElementById('backdrop-root')
			)}

			{ReactDOM.createPortal(
				<TransactionModel />,
				document.getElementById('income-root')
			)}
		</div>
	);
}

export default AddTransModel;
