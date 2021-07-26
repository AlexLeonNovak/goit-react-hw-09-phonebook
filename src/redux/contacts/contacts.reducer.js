import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts.actions';

const items = createReducer([], {
	[actions.fetchContactsSuccess]: (_, { payload }) => payload,
	[actions.addContactSuccess]: (state, { payload }) => [payload, ...state],
	[actions.deleteContactSuccess]: (state, { payload }) =>
		state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
	[actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
	items,
	filter,
});
