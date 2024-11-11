import React from 'react';

function GetDate(props) {
	const now = new Date();
	const date = now.getDate();
	const month = String(now.getMonth() + 1).padStart(2, '0');
	const year = now.getFullYear();

	const liveDate = `${year}-${month}-${date}`;
	return liveDate;
}

export default GetDate;
