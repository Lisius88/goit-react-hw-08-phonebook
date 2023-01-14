import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const AuthNavStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 600px) {
    justify-content: flex-end;
    margin-left: auto;
    margin-right: 0;
  }
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
