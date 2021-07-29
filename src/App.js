import { Switch } from 'react-router-dom';
import { routes } from './routes';
import './App.css';
import { Container } from './Styles';
import { useDispatch, useSelector } from 'react-redux';
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

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(authOperations.getCurrentUser());
	}, [dispatch]);

	const loading = useSelector(loadingSelectors.getLoading);

	return (
		<>
			<AppBar />
			{loading && <Loader />}

			<Container>
				<Suspense fallback={<Loader />}>
					<Switch>
						<PublicRoute exact path={routes.home}>
							<HomeView />
						</PublicRoute>

						<PublicRoute
							path={routes.login}
							restricted
							redirectTo={routes.phonebook}
						>
							<LoginView />
						</PublicRoute>

						<PublicRoute
							path={routes.register}
							restricted
							redirectTo={routes.phonebook}
						>
							<RegisterView />
						</PublicRoute>

						<PrivateRoute
							path={routes.phonebook}
							redirectTo={routes.login}
						>
							<PhonebookView />
						</PrivateRoute>
					</Switch>
				</Suspense>
			</Container>
		</>
	);
};

export default App;
