import styled from '@emotion/styled';

export const Button = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 10px;
  display: block;
  text-decoration: none;
  border: 2px solid #e8f0f7;
  border-radius: 3px;
  text-align: center;

  overflow: hidden;
  font-size: 15px;
  line-height: 20px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Roboto Condensed', Тahoma, sans-serif;
  background: #e7473c;
  transition: box-shadow 0.3s, transform 0.3s;
  cursor: pointer;
  z-index: 1;

  :hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const FormContent = styled.form`
  width: 260px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 600px) {
    width: 505px;
    margin-left: 15px;
  }
`;

export const Input = styled.input`
  font-size: 20px;
`;

export const Label = styled.label`
  font-size: 20px;
`;

export const Validation = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`;
