import shortid from 'shortid';
import { connect } from 'react-redux';
import { FormElement, FormGroup, Input, Label } from '../../Styles';
import { contactsSelectors, contactsActions } from '../../redux/contacts';

const Filter = ({ value, onFilterInput }) => {
	const inputFilterId = shortid.generate();
	return (
		<FormElement>
			<FormGroup>
				<Label htmlFor={inputFilterId}>Filter</Label>
				<Input
					id={inputFilterId}
					name="filter"
					value={value}
					onChange={onFilterInput}
				/>
			</FormGroup>
		</FormElement>
	);
};

const mstp = state => ({
	value: contactsSelectors.getFilter(state),
});

const mdtp = dispatch => ({
	onFilterInput: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mstp, mdtp)(Filter);
