import React, { Component } from 'react';
import './App.css';
import { Form } from './components/Form';
import { ContactList } from './components/ContactList';

class App extends Component {
	state = {
		contacts: [],
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
				<h1>Phonebook</h1>
				<Form onFormSubmit={this.addContact} />
				<ContactList contacts={contacts} />
			</React.StrictMode>
		);
	}
}

export default App;
