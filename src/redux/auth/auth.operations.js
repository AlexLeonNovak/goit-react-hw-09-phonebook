import axios from 'axios';
import * as authActions from './auth.actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},
	unset() {
		axios.defaults.headers.common.Authorization = '';
	},
};

export const register = credentials => dispatch => {
	dispatch(authActions.registerRequest());
	console.log(credentials);
	axios
		.post('/users/signup', credentials)
		.then(response => {
			token.set(response.data.token);
			dispatch(authActions.registerSuccess(response.data));
		})
		.catch(error => dispatch(authActions.registerError(error.message)));
};

export const login = credentials => dispatch => {
	dispatch(authActions.loginRequest());

	axios
		.post('/users/login', credentials)
		.then(response => {
			token.set(response.data.token);
			dispatch(authActions.loginSuccess(response.data));
		})
		.catch(error => dispatch(authActions.loginError(error.message)));
};

export const logout = () => dispatch => {
	dispatch(authActions.logoutRequest());
	axios
		.post('/users/logout')
		.then(() => {
			token.unset();
			dispatch(authActions.logoutSuccess());
		})
		.catch(error => dispatch(authActions.logoutError(error.message)));
};

export const getCurrentUser = () => (dispatch, getState) => {
	const {
		auth: { token: persistedToken },
	} = getState();

	if (!persistedToken) {
		return;
	}

	token.set(persistedToken);
	dispatch(authActions.getCurrentUserRequest());

	axios
		.get('/users/current')
		.then(response =>
			dispatch(authActions.getCurrentUserSuccess(response.data)),
		)
		.catch(error =>
			dispatch(authActions.getCurrentUserError(error.message)),
		);
};
