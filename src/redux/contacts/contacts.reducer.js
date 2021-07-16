import { combineReducers } from 'redux';
import types from './contacts.types';

const initItems = [
	{ id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
	{ id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
	{ id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
	{ id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
];

const items = (state = initItems, { type, payload }) => {
	switch (type) {
		case types.ADD:
			return [payload, ...state];

		case types.DELETE:
			return state.filter(contact => contact.id !== payload);

		default:
			return state;
	}
};

const filter = (state = '', { type, payload }) => {
	switch (type) {
		case types.FILTER:
			return payload;

		default:
			return state;
	}
};

export default combineReducers({
	items,
	filter,
});
