import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  FormContent,
  Input,
  Label,
  Validation,
} from '../Form/Form.styled';
import { registration } from '../redux/Auth/operations';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { selectIsLoadingUser } from 'components/redux/Auth/selectors';
import { Spinner } from 'components/Loader/Spinner';
import { LoginStyledContainer } from 'components/LoginForm/LoginForm.styled';

const schema = yup
  .object({
    name: yup.string().required('Username is required'),
    email: yup
      .string()
      .email('Plaese, enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 8 characters'
      )
      .required('Password is required'),
  })
  .required();

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const userLoading = useSelector(selectIsLoadingUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = data => {
    console.log(data);
    dispatch(
      registration({
        name: data.name,
        email: data.email,
        password: data.password,
      })
    );
  };

  return (
    <LoginStyledContainer>
      <FormContent onSubmit={handleSubmit(submit)} autoComplete="off">
        <Label>
          Username <Input {...register('name')} placeholder="Ace Ventura" />
          <Validation>{errors.name?.message}</Validation>
        </Label>
        <Label>
          Email <Input {...register('email')} placeholder="qwerty@gmail.com" />
          <Validation>{errors.email?.message}</Validation>
        </Label>
        <Label>
          Password{' '}
          <Input
            type="password"
            {...register('password')}
            placeholder="Friday13"
          />
          <Validation>{errors.password?.message}</Validation>
        </Label>
        {(userLoading && <Button type="submit">{<Spinner />}</Button>) || (
          <Button type="submit">Register</Button>
        )}
      </FormContent>
    </LoginStyledContainer>
  );
};
