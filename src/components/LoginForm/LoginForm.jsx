import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  FormContent,
  Input,
  Label,
  Validation,
} from '../Form/Form.styled';
import { logIn } from '../redux/Auth/operations';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { selectIsLoadingUser } from 'components/redux/Auth/selectors';
import { Spinner } from 'components/Loader/Spinner';
import { LoginStyledContainer } from './LoginForm.styled';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Plaese, enter a valid email')
      .required('Email is required'),
    password: yup.string().required('Password is required'),
  })
  .required();

export const LoginForm = () => {
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
      logIn({
        email: data.email,
        password: data.password,
      })
    );
  };

  return (
    <LoginStyledContainer>
      <FormContent onSubmit={handleSubmit(submit)}>
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

        <p>{errors.number?.message}</p>
        {(userLoading && <Button type="submit">{<Spinner />}</Button>) || (
          <Button type="submit">Log In</Button>
        )}
      </FormContent>
    </LoginStyledContainer>
  );
};
