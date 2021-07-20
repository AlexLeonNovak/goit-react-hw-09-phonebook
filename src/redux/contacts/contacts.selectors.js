import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.contacts.filter;

export const getLoading = state => state.contacts.loading;

export const getAllContacts = state => state.contacts.items;

export const getFilteredContacts = createSelector(
	[getFilter, getAllContacts],
	(filter, contacts) => {
		const normalizedFilter = filter.toLowerCase().trim();
		return contacts.filter(
			contact =>
				contact.name.toLowerCase().trim().includes(normalizedFilter) ||
				contact.phone.toLowerCase().trim().includes(normalizedFilter),
		);
	},
);
