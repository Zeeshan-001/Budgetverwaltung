import React, { Fragment, useContext } from 'react';
import ReactDOM from 'react-dom';
import Card from '../UI/Card';
import Backdrop from '../utils/Backdrop';
import RenderButton from '../utils/RenderButton';
import TransContext from '../../store/trans-context';

const ModalOverlay = (props) => {
	const ctx = useContext(TransContext);

	return (
		<Card className='modalOverlay'>
			<header className='modalOverlay__header'>
				<h2 className='heading--secondary'>SURE! Do you want to delete?</h2>
			</header>

			<p className='paragraph mb-m'>
				Trnasaction could also be EDIT instead DELETE!
			</p>

			<footer className='modalOverlay__btns'>
				<RenderButton
					label='Cancel'
					onClick={() => ctx.handleDeleteConfirm('cancel')}
				/>

				<RenderButton
					label='Confirm'
					onClick={() => ctx.handleDeleteConfirm('confirm')}
				/>
			</footer>
		</Card>
	);
};

function DeleteModel(props) {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop />,
				document.getElementById('backdrop-root')
			)}

			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					onConfirm={props.onConfirm}
				/>,
				document.getElementById('overlay-root')
			)}
		</Fragment>
	);
}

export default DeleteModel;
