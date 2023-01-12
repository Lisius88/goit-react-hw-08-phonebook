import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 1100px;
  margin-bottom: 30px;
`;

export const Item = styled.li`
  padding: 0;
  margin: 0;
  width: 300px;
  margin-left: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid #e7473c;
  background-color: white;
  border-radius: 5px;
  margin-top: 15px;
  padding: 5px;
`;

export const Button = styled.button`
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  display: block;
  text-decoration: none;
  border: 2px solid #e8f0f7;
  border-radius: 3px;
  text-align: center;

  overflow: hidden;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Roboto Condensed', Тahoma, sans-serif;
  background: #e7473c;
  transition: box-shadow 0.3s, transform 0.3s;
  cursor: pointer;

  :hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const Notiffication = styled.p`
  font-size: 25px;
  color: #fff;
  padding-top: 10px;
  padding-bottom: 15px;
  text-align: center;
`;

export const NotifficationContainer = styled.div`
  border: 3px solid white;
  margin-right: auto;
  margin-left: 15px;
  margin-top: 30px;
  max-width: 505px;
  background-color: #e7473c;
  border-radius: 8px;
`;

export const Numb = styled.a`
  color: #000000;
  padding: 0;
  font-size: 18px;
  text-decoration: underline;
  transition: color 250ms linear;

  &:hover {
    color: #e61405;
  }
`;
