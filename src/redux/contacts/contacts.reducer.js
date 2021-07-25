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

// const isLoadingAction = action => action.type.endsWith('Request');
// const isEndLoadingAction = action =>
// 	action.type.endsWith('Success') || action.type.endsWith('Error');
// const loading = createReducer(false, builder => {
// 	builder
// 		.addMatcher(isLoadingAction, () => true)
// 		.addMatcher(isEndLoadingAction, () => false);
// });

export default combineReducers({
	items,
	filter,
	// loading,
});
