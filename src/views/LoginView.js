import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

export class LoginView extends Component {
	state = {
		email: '',
		password: '',
	};

	handleChange = ({ target: { name, value } }) => {
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.onLogin(this.state);
		this.setState({ email: '', password: '' });
	};

	render() {
		const { email, password } = this.state;

		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit} className="form">
					<label className="form-label">
						Email
						<input
							type="email"
							name="email"
							value={email}
							onChange={this.handleChange}
						/>
					</label>

					<label className="form-label">
						Password
						<input
							type="password"
							name="password"
							value={password}
							onChange={this.handleChange}
						/>
					</label>

					<button type="submit">Login</button>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = {
	onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);
