import { API_KEY, CAT_URL } from './config';

const headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
	'x-api-key': API_KEY,
};

const prepareDate = (res) => {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject(res.status);
};

export const getCats = (amount) => {
	return fetch(`${CAT_URL}${amount}`, { method: 'GET', headers: headers }).then((res) => prepareDate(res));
};
