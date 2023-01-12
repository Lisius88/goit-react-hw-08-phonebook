import { Link } from 'react-router-dom';
import { Container, NotFoundDescr, NotFoundBtn } from './NotFound.styled';

export const NotFound = () => {
  return (
    <Container>
      <h3>404</h3>
      <NotFoundDescr>Page not found</NotFoundDescr>
      <NotFoundBtn>
        <Link to="/">Go home</Link>
      </NotFoundBtn>
    </Container>
  );
};
