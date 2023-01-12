import { useDispatch } from 'react-redux';
import { register } from '../redux/Auth/operations';
import { Button, FormContent, Input, Label } from '../Form/Form.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          Username
          <Input type="text" name="name" placeholder="Jacob Tall" required />
        </Label>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            pattern="^([^ ]+@[^ ]+\.[a-z]{2,6}|)$"
            placeholder="qwerty@gmail.com"
            required
          />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" required minLength={8} />
        </Label>
        <Button type="submit">Register</Button>
      </FormContent>
    </div>
  );
};
