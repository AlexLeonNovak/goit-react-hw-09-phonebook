import shortid from 'shortid';

import { notice } from '../../libs/pnotify';
import { FormGroup, Label, FormElement, Button, Input } from '../../Styles';

import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Form() {
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const onNameChange = e => {
		setName(e.target.value);
	};

	const [number, setNumber] = useState('');
	const onNumberChange = e => {
		setNumber(e.target.value);
	};

	const contacts = useSelector(contactsSelectors.getAllContacts);

	const formReset = () => {
		setName('');
		setNumber('');
	};

	const onFormSubmit = e => {
		e.preventDefault();
		const isContactExist = contacts.some(
			contact => contact.name === name || contact.number === number,
		);
		if (isContactExist) {
			notice({
				title: 'The contact is already in the list',
				text: 'Please, add a contact with a different name or phone number',
			});
			return;
		}
		dispatch(contactsOperations.addContact({ name, number }));
		formReset();
	};

	const inputNameId = shortid.generate();
	const inputPhoneId = shortid.generate();

	return (
		<FormElement onSubmit={onFormSubmit}>
			<FormGroup>
				<Label htmlFor={inputNameId}>Name</Label>
				<Input
					id={inputNameId}
					type="text"
					name="name"
					value={name}
					onChange={onNameChange}
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
					required
				/>
			</FormGroup>
			<FormGroup>
				<Label htmlFor={inputPhoneId}>Phone</Label>
				<Input
					id={inputPhoneId}
					type="tel"
					name="number"
					value={number}
					onChange={onNumberChange}
					required
				/>
			</FormGroup>
			<FormGroup>
				<Button type="submit">Add contact</Button>
			</FormGroup>
		</FormElement>
	);
}
