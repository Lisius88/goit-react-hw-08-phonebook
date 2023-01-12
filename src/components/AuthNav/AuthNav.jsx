import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const AuthNavStyled = styled.div`
  display: flex;
`;

const NavLinkActive = styled(NavLink)`
  &.active {
    color: #000000;
  }
`;

export const AuthNav = () => {
  return (
    <AuthNavStyled>
      <NavLinkActive to="/register">Register</NavLinkActive>
      <NavLinkActive to="/login">Log In</NavLinkActive>
    </AuthNavStyled>
  );
};
