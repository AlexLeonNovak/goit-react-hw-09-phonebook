import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

const AuthNav = () => (
	<>
		<NavLink to={routes.login} exact className="App-link">
			Login
		</NavLink>
		<NavLink to={routes.register} className="App-link">
			Register
		</NavLink>
	</>
);

export default AuthNav;
