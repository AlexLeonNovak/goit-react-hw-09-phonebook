import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { useCallback } from 'react';

const UserMenu = () => {
	const dispatch = useDispatch();
	const userName = useSelector(authSelectors.getUserName);

	const onLogout = useCallback(() => {
		dispatch(authOperations.logout());
	}, [dispatch]);

	return (
		<>
			<span>Welcome, {userName}</span>
			<button type="button" onClick={onLogout}>
				logout
			</button>
		</>
	);
};

export default UserMenu;
