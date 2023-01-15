import styled from '@emotion/styled';

const Descr = styled.p`
  text-align: center;
  font-size: 25px;
  color: #fff;
  padding-top: 10px;
  padding-bottom: 15px;
`;

const Container = styled.div`
  border: 3px solid white;
  margin-left: auto;
  margin-right: auto;
  max-width: 310px;
  background-color: #e7473c;
  border-radius: 10px;

  @media (min-width: 600px) {
    max-width: 530px;
  }
`;

export const Notif = () => {
  return (
    <Container>
      <Descr>Contacts list is empty. Add your first contacts :)</Descr>
    </Container>
  );
};
