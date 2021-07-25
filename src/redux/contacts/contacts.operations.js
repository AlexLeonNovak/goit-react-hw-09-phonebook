import axios from 'axios';
import * as actions from './contacts.actions';

export const fetchContacts = () => dispatch => {
	dispatch(actions.fetchContactsRequest());
	console.log('fetchContacts');
	axios
		.get('/contacts')
		.then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
		.catch(error => dispatch(actions.fetchContactsError(error.message)));
};

export const addContact = contact => dispatch => {
	dispatch(actions.addContactRequest());

	axios
		.post('/contacts', contact)
		.then(({ data }) => dispatch(actions.addContactSuccess(data)))
		.catch(error => dispatch(actions.addContactError(error.message)));
};

export const deleteContact = id => dispatch => {
	dispatch(actions.deleteContactRequest());

	axios
		.delete(`/contacts/${id}`)
		.then(() => dispatch(actions.deleteContactSuccess(id)))
		.catch(error => dispatch(actions.deleteContactError(error.message)));
};
