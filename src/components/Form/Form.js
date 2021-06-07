import shortid from 'shortid';
import { v4 as uuid4 } from 'uuid';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Form extends Component {
	state = {
		name: '',
	};

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
		this.setState({
			name: '',
		});
	};

	render() {
		const inputNameId = shortid.generate();

		return (
			<form onSubmit={this.onFormSubmit}>
				<label htmlFor={inputNameId}>Name</label>
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

				<button type="submit">Add contact</button>
			</form>
		);
	}
}

Form.propTypes = {
	onFormSubmit: PropTypes.func.isRequired,
};
