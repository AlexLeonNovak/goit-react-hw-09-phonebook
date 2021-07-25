import { Switch, Route } from 'react-router-dom';

import AppBar from './components/AppBar';
import { HomeView } from './views/HomeView';
import LoginView from './views/LoginView';
import { PhonebookView } from './views/PhonebookView';
import RegisterView from './views/RegisterView';

import { routes } from './routes';
import './App.css';
import { Container } from './Styles';
import { connect } from 'react-redux';
import { loadingSelectors } from './redux/loading';
import { Loader } from './components/Loader';
import { authOperations, authSelectors } from './redux/auth';
import { useEffect } from 'react';

const App = ({ loading, isAuthenticated, onGetCurrentUser }) => {
	useEffect(() => {
		onGetCurrentUser();
	}, []);

	return (
		<>
			<AppBar />
			{loading && <Loader />}

			<Container>
				<Switch>
					<Route exact path={routes.home} component={HomeView} />
					<Route path={routes.login} component={LoginView} />
					<Route path={routes.register} component={RegisterView} />
					{isAuthenticated && (
						<Route
							path={routes.phonebook}
							component={PhonebookView}
						/>
					)}
				</Switch>
			</Container>
			{/*<Container>*/}
			{/*	<h1>Phonebook</h1>*/}
			{/*	<Form />*/}
			{/*	<Filter />*/}
			{/*	<ContactList />*/}
			{/*</Container>*/}
		</>
	);
};

const mapStateToProps = state => ({
	loading: loadingSelectors.getLoading(state),
	isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = {
	onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
