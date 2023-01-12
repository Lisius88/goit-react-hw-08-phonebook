import { useDispatch } from 'react-redux';
import { logIn } from '../redux/Auth/operations';
import { Button, FormContent, Input, Label } from '../Form/Form.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <div
      style={{
        width: '505px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <FormContent onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Button type="submit">Log In</Button>
      </FormContent>
    </div>
  );
};
