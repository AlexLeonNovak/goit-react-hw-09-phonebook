export const getFilter = state => state.contacts.filter;

export const getLoading = state => state.contacts.loading;

export const getAllContacts = state => state.contacts.items;

export const getFilteredContacts = state => {
	const normalizedFilter = getFilter(state).toLowerCase().trim();
	return getAllContacts(state).filter(
		contact =>
			contact.name.toLowerCase().trim().includes(normalizedFilter) ||
			contact.phone.toLowerCase().trim().includes(normalizedFilter),
	);
};
