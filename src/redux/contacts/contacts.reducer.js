import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './contacts.actions';

const initItems = [
	{ id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
	{ id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
	{ id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
	{ id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
];

const items = createReducer(initItems, {
	[addContact]: (state, { payload }) => [payload, ...state],
	[deleteContact]: (state, { payload }) =>
		state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
	[changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
	items,
	filter,
});
