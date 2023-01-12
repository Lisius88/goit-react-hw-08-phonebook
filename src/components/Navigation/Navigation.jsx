import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import styled from '@emotion/styled';

const NavStyled = styled.nav`
  display: flex;
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavStyled>
      {/* <NavLink to="/">Home</NavLink> */}
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </NavStyled>
  );
};
