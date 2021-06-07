import shortid from 'shortid';
import { v4 as uuid4 } from 'uuid';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, FormElement } from '../../Styles';

const initState = {
	name: '',
	phone: '',
};

export class Form extends Component {
	state = initState;

	onInputChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	onFormSubmit = e => {
		e.preventDefault();
		this.props.onFormSubmit({
			...this.state,
			id: uuid4(),
		});
		this.setState(initState);
	};

	render() {
		const inputNameId = shortid.generate();
		const inputPhoneId = shortid.generate();

		return (
			<FormElement onSubmit={this.onFormSubmit}>
				<FormGroup>
					<Label htmlFor={inputNameId}>Name</Label>
					<input
						id={inputNameId}
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.onInputChange}
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
						required
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor={inputPhoneId}>Phone</Label>
					<input
						id={inputPhoneId}
						type="tel"
						name="phone"
						value={this.state.phone}
						onChange={this.onInputChange}
						required
					/>
				</FormGroup>
				<FormGroup>
					<button type="submit">Add contact</button>
				</FormGroup>
			</FormElement>
		);
	}
}

Form.propTypes = {
	onFormSubmit: PropTypes.func.isRequired,
};
