import { routes } from '../../routes';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { Container } from '../../Styles';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';

const AppBar = ({ isAuthenticated }) => (
	<header className="App-header">
		<Container className="df space-between">
			<div className="df">
				<h2 className="App-title">Phonebook</h2>
				<NavLink to={routes.home} exact className="App-link">
					Home
				</NavLink>
				{isAuthenticated && (
					<NavLink to={routes.phonebook} className="App-link">
						Phonebook
					</NavLink>
				)}
			</div>
			<div className="df">
				{isAuthenticated ? <UserMenu /> : <AuthNav />}
			</div>
		</Container>
	</header>
);

const mapStateToProps = state => ({
	isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
