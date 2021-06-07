import PropTypes from 'prop-types';

export const ContactList = ({ contacts }) => (
	<>
		<h1>Contacts</h1>
		{contacts.length ? (
			<ul>
				{contacts.map(({ id, name, phone }) => (
					<li key={id}>
						{name}: {phone}
					</li>
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
};
