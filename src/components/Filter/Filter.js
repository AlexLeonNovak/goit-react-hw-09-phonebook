import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import { FormElement, FormGroup, Input, Label } from '../../Styles';
import { contactsSelectors, contactsActions } from '../../redux/contacts';
import { useCallback } from 'react';

const Filter = () => {
	const dispatch = useDispatch();
	const value = useSelector(contactsSelectors.getFilter);

	const onFilterChange = useCallback(
		e => {
			dispatch(contactsActions.changeFilter(e.target.value));
		},
		[dispatch],
	);

	const inputFilterId = shortid.generate();
	return (
		<FormElement>
			<FormGroup>
				<Label htmlFor={inputFilterId}>Filter</Label>
				<Input
					id={inputFilterId}
					name="filter"
					value={value}
					onChange={onFilterChange}
				/>
			</FormGroup>
		</FormElement>
	);
};

export default Filter;
