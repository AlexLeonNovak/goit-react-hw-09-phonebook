import { createReducer } from '@reduxjs/toolkit';

const isLoadingAction = action => action.type.endsWith('Request');
const isEndLoadingAction = action =>
	action.type.endsWith('Success') || action.type.endsWith('Error');

const loading = createReducer(false, builder => {
	builder
		.addMatcher(isLoadingAction, () => true)
		.addMatcher(isEndLoadingAction, () => false);
});

export default loading;
