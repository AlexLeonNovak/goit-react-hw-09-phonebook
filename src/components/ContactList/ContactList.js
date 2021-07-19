import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../Styles';
import { Li } from './styles';
import { connect } from 'react-redux';
import * as contactsOperations from '../../redux/contacts/contacts.operations';
import {
	getFilteredContacts,
	getLoading,
} from '../../redux/contacts/contacts.selectors';

const ContactList = ({ contacts, loading, onDeleteClick, fetchContacts }) => {
	useEffect(() => {
		fetchContacts();
	}, []);

	return (
		<>
			{loading && <h3>Loading...</h3>}
			<h1>Contacts</h1>
			{contacts.length ? (
				<ul>
					{contacts.map(({ id, name, phone }) => (
						<Li key={id}>
							{name}: {phone}
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
};

ContactList.defaultProps = {
	contacts: [],
};

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			phone: PropTypes.string.isRequired,
		}),
	),
	onDeleteClick: PropTypes.func.isRequired,
};

const mstp = state => ({
	contacts: getFilteredContacts(state),
	loading: getLoading(state),
});

const mdtp = dispatch => ({
	onDeleteClick: id => dispatch(contactsOperations.deleteContact(id)),
	fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mstp, mdtp)(ContactList);
