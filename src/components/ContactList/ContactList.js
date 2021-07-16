import PropTypes from 'prop-types';
import { Button } from '../../Styles';
import { Li } from './styles';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts.actions';

const ContactList = ({ contacts, onDeleteClick }) => (
	<>
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

const getContacts = (allContacts, filter) => {
	console.log(allContacts);
	const normalizedFilter = filter.toLowerCase().trim();
	return allContacts.filter(
		contact =>
			contact.name.toLowerCase().trim().includes(normalizedFilter) ||
			contact.phone.toLowerCase().trim().includes(normalizedFilter),
	);
};

const mstp = ({ contacts: { items, filter } }) => ({
	contacts: getContacts(items, filter),
});

const mdtp = dispatch => ({
	onDeleteClick: id => dispatch(deleteContact(id)),
});

export default connect(mstp, mdtp)(ContactList);
