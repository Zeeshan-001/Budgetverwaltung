import React, { useContext } from 'react';
import { categories } from '../../Helpers/data';
import TransContext from '../../store/trans-context';

function TransOptions({ handleOptions }) {
	const { handleSelectItem, inputs } = useContext(TransContext);
	const type = categories.filter((cat) => cat.type === inputs.type);

	const options = inputs.category
		? type.filter((cat) => cat.label.startsWith(inputs.category.toLowerCase()))
		: type;

	const categoris = options.map((cat) => (
		<li key={cat._id} id={cat._id} onClick={() => handleSelectItem(cat.label)}>
			<img src={cat.svg} alt={cat.label} /> {cat.svg && cat.label}
		</li>
	));

	return (
		<ul className='transOptions' onClick={handleOptions}>
			{categoris}
		</ul>
	);
}

export default TransOptions;
