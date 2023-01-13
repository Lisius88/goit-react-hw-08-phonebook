import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/operations';
import { Button, FormContent, Input, Label, Validation } from './Form.styled';
import toast from 'react-hot-toast';
import { Spinner } from 'components/Loader/Spinner';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    number: yup.string().required('Number is required'),
  })
  .required();

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.isLoading);

  const listContainsContact = contact => {
    return contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = data => {
    if (listContainsContact(data)) {
      return toast.error(`${data.name} is already in contacts.`);
    }
    dispatch(addContact(data));
    reset();
  };

  return (
    <FormContent onSubmit={handleSubmit(submit)}>
      <Label>
        Name <Input {...register('name')} placeholder="Eddie van Halen" />
        <Validation>{errors.name?.message}</Validation>
      </Label>
      <Label>
        Number <Input {...register('number')} placeholder="+38 (067) 1234567" />
        <Validation>{errors.number?.message}</Validation>
      </Label>

      {(isLoading && <Button type="submit">{<Spinner />}</Button>) || (
        <Button type="submit">Save</Button>
      )}
    </FormContent>
  );
};
