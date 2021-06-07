import shortid from 'shortid';
import { FormElement, FormGroup, Input, Label } from '../../Styles';

export const Filter = ({ value, onFilterInput }) => {
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
