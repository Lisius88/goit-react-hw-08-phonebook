import { useDispatch } from 'react-redux';
import { logOut } from '../redux/Auth/operations';
import { useAuth } from 'hooks';
import { Button, UserMenuStyled, UserDescr } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuStyled>
      <UserDescr>Welcome, {user.name}</UserDescr>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserMenuStyled>
  );
};
