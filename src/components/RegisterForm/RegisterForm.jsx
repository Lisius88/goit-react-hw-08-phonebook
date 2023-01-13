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

const schema = yup
  .object({
    name: yup.string().required('Username is required'),
    email: yup
      .string()
      .email('Plaese, enter a valid email')
      .required('Email is required'),
    password: yup.string().required('Password is required'),
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
    <div
      style={{
        width: '505px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <FormContent onSubmit={handleSubmit(submit)}>
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
            placeholder="Friday_13"
          />
          <Validation>{errors.password?.message}</Validation>
        </Label>
        {(userLoading && <Button type="submit">{<Spinner />}</Button>) || (
          <Button type="submit">Log In</Button>
        )}
      </FormContent>
    </div>
  );
};
