import React, { Component } from 'react';
import { notice } from './libs/pnotify';

import { Form } from './components/Form';
import { ContactList } from './components/ContactList';
import { Filter } from './components/Filter';

import './App.css';
import { Container } from './Styles';

class App extends Component {
	state = {
		contacts: [
			{ id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
		],
		filter: '',
	};

	addContact = data => {
		const { contacts } = this.state;
		const { name, phone } = data;
		const isContactExist = contacts.some(
			contact => contact.name === name || contact.phone === phone,
		);
		if (isContactExist) {
			notice({
				title: 'The contact is already in the list',
				text: 'Please, add a contact with a different name or phone number',
			});
			return;
		}
		this.setState(prevState => ({
			contacts: [data, ...prevState.contacts],
		}));
	};

	setFilter = e => {
		this.setState({ filter: e.target.value });
	};

	getContacts = () => {
		const { contacts, filter } = this.state;
		const normalizedFilter = filter.toLowerCase().trim();
		return contacts.filter(
			contact =>
				contact.name.toLowerCase().trim().includes(normalizedFilter) ||
				contact.phone.toLowerCase().trim().includes(normalizedFilter),
		);
	};

	render() {
		const { filter } = this.state;

		return (
			<React.StrictMode>
				<Container>
					<h1>Phonebook</h1>
					<Form onFormSubmit={this.addContact} />
					<Filter value={filter} onFilterInput={this.setFilter} />
					<ContactList contacts={this.getContacts()} />
				</Container>
			</React.StrictMode>
		);
	}
}

export default App;
