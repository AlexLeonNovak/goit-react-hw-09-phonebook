import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contacts from './contacts/contacts.reducer';

const reducer = combineReducers({
	contacts,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
