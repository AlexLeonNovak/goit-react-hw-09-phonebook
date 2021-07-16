import React from 'react';

import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

import './App.css';
import { Container } from './Styles';

const App = () => {
	return (
		<React.StrictMode>
			<Container>
				<h1>Phonebook</h1>
				<Form />
				<Filter />
				<ContactList />
			</Container>
		</React.StrictMode>
	);
};

export default App;

/*
	componentDidMount() {
		const contactsJson = localStorage.getItem('contacts');
		const contacts = JSON.parse(contactsJson);
		if (contacts) {
			this.setState({ contacts });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		const { contacts } = this.state;
		if (contacts !== prevState.contacts) {
			localStorage.setItem('contacts', JSON.stringify(contacts));
		}
	}

 */
