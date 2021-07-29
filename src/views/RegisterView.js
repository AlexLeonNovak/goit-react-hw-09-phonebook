import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

const initFormData = {
	name: '',
	email: '',
	password: '',
};

const formReducer = (state, payload) => {
	if (payload?.reset) {
		return initFormData;
	}
	return {
		...state,
		[payload.name]: payload.value,
	};
};

const RegisterView = () => {
	const dispatch = useDispatch();

	const [formData, setFormData] = useReducer(formReducer, initFormData);

	const handleChange = ({ target: { name, value } }) => {
		setFormData({ name, value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(authOperations.register({ ...formData }));
		setFormData({ reset: true });
	};

	return (
		<div>
			<h1>Registration</h1>

			<form onSubmit={handleSubmit} className="form">
				<label className="form-label">
					Name
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
					/>
				</label>

				<label className="form-label">
					Email
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
				</label>

				<label className="form-label">
					Password
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
					/>
				</label>

				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default RegisterView;
