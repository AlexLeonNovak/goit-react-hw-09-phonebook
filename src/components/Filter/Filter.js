import shortid from 'shortid';
import { connect } from 'react-redux';
import { FormElement, FormGroup, Input, Label } from '../../Styles';
import { changeFilter } from '../../redux/contacts/contacts.actions';

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
	value: state.contacts.filter,
});

const mdtp = dispatch => ({
	onFilterInput: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mstp, mdtp)(Filter);
