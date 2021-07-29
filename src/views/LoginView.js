import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

const LoginView = () => {
	const [email, setEmail] = useState('');
	const handleEmailChange = ({ target }) => setEmail(target.value);

	const [password, setPassword] = useState('');
	const handlePasswordChange = ({ target }) => setPassword(target.value);

	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(authOperations.login({ email, password }));
		setEmail('');
		setPassword('');
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit} className="form">
				<label className="form-label">
					Email
					<input
						type="email"
						name="email"
						value={email}
						onChange={handleEmailChange}
					/>
				</label>

				<label className="form-label">
					Password
					<input
						type="password"
						name="password"
						value={password}
						onChange={handlePasswordChange}
					/>
				</label>

				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default LoginView;
