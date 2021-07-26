import { Switch } from 'react-router-dom';
import { routes } from './routes';
import './App.css';
import { Container } from './Styles';
import { connect } from 'react-redux';
import { loadingSelectors } from './redux/loading';
import { authOperations } from './redux/auth';
import { lazy, useEffect, Suspense } from 'react';
import { Loader } from './components/Loader';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const LoginView = lazy(() => import('./views/LoginView'));
const PhonebookView = lazy(() => import('./views/PhonebookView'));
const RegisterView = lazy(() => import('./views/RegisterView'));

const App = ({ loading, onGetCurrentUser }) => {
	useEffect(() => {
		onGetCurrentUser();
	}, [onGetCurrentUser]);

	return (
		<>
			<AppBar />
			{loading && <Loader />}

			<Container>
				<Suspense fallback={<Loader />}>
					<Switch>
						<PublicRoute
							exact
							path={routes.home}
							component={HomeView}
						/>
						<PublicRoute
							path={routes.login}
							restricted
							redirectTo={routes.phonebook}
							component={LoginView}
						/>
						<PublicRoute
							path={routes.register}
							restricted
							redirectTo={routes.phonebook}
							component={RegisterView}
						/>
						<PrivateRoute
							path={routes.phonebook}
							redirectTo={routes.login}
							component={PhonebookView}
						/>
					</Switch>
				</Suspense>
			</Container>
		</>
	);
};

const mapStateToProps = state => ({
	loading: loadingSelectors.getLoading(state),
});

const mapDispatchToProps = {
	onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
