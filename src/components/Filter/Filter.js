import shortid from 'shortid';
import { FormElement, Label } from '../../Styles';

export const Filter = ({ value, onFilterInput }) => {
	const inputFilterId = shortid.generate();
	return (
		<FormElement>
			<Label htmlFor={inputFilterId}>Filter</Label>
			<input
				id={inputFilterId}
				name="filter"
				value={value}
				onChange={onFilterInput}
			/>
		</FormElement>
	);
};
