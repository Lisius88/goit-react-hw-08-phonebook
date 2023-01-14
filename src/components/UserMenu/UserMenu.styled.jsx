import styled from '@emotion/styled';

export const Button = styled.button`
  margin-left: 15px;
  margin-right: 20px;
  height: 40px;
  margin-top: 10px;
  display: block;
  text-decoration: none;
  border: 2px solid #d10303;
  border-radius: 3px;
  text-align: center;

  overflow: hidden;
  font-size: 20px;
  color: #e7473c;
  font-family: 'Roboto Condensed', Тahoma, sans-serif;
  background: #fff;
  transition: box-shadow 0.3s, transform 0.3s;
  cursor: pointer;
  z-index: 1;

  :hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const UserDescr = styled.p`
  display: none;

  @media (min-width: 600px) {
    display: inline-block;
    font-size: 20px;
    color: #ffffffff;
  }
`;

export const UserMenuStyled = styled.div`
  display: flex;
  align-items: baseline;
`;
