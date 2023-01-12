import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import styled from '@emotion/styled';

const Header = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #e7473c;
  margin-bottom: 20px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
