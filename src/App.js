import React, { Component } from 'react';
import './App.css';
import { Form } from './components/Form';
import { ContactList } from './components/ContactList';
import { Container } from './Styles';

class App extends Component {
	state = {
		contacts: [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
		],
	};

	addContact = data => {
		this.setState(prevState => ({
			contacts: [data, ...prevState.contacts],
		}));
	};

	render() {
		const { contacts } = this.state;

		return (
			<React.StrictMode>
				<Container>
					<h1>Phonebook</h1>
					<Form onFormSubmit={this.addContact} />
					<ContactList contacts={contacts} />
				</Container>
			</React.StrictMode>
		);
	}
}

export default App;
