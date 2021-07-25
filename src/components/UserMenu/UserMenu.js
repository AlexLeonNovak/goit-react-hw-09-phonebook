import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = ({ userName, onLogout }) => (
	<>
		<span>Welcome, {userName}</span>
		<button type="button" onClick={onLogout}>
			logout
		</button>
	</>
);

const mapStateToProps = state => ({
	userName: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
	onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
