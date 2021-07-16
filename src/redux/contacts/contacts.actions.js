import types from './contacts.types';

export const addContact = contact => ({
	type: types.ADD,
	payload: contact,
});

export const deleteContact = id => ({
	type: types.DELETE,
	payload: id,
});

export const changeFilter = filter => ({
	type: types.FILTER,
	payload: filter,
});
