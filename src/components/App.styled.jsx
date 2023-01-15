import styled from '@emotion/styled';

export const MainContent = styled.div`
  /* margin-top: 30px;
  border-radius: 10px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  background-color: #7baab3; */
`;

export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 35px;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 600px) {
    flex-direction: column;
  }
`;
