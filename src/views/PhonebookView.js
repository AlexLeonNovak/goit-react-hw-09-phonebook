import Form from '../components/Form';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

export const PhonebookView = () => (
	<>
		<h1>Phonebook</h1>
		<Form />
		<Filter />
		<ContactList />
	</>
);
