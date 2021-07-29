import { useCallback, useEffect } from 'react';
import { Button } from '../../Styles';
import { Li } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';

export default function ContactList() {
	const dispatch = useDispatch();
	const contacts = useSelector(contactsSelectors.getFilteredContacts);

	const fetchContacts = useCallback(
		() => dispatch(contactsOperations.fetchContacts()),
		[dispatch],
	);

	const onDeleteClick = id => dispatch(contactsOperations.deleteContact(id));

	useEffect(() => {
		fetchContacts();
	}, [fetchContacts]);

	return (
		<>
			<h1>Contacts</h1>
			{contacts.length ? (
				<ul>
					{contacts.map(({ id, name, number }) => (
						<Li key={id}>
							{name}: {number}
							<Button onClick={() => onDeleteClick(id)}>
								<span className="material-icons">delete</span>
								Delete
							</Button>
						</Li>
					))}
				</ul>
			) : (
				<p>There are no contacts yet...</p>
			)}
		</>
	);
}
