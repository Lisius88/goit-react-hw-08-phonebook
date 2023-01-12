import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/operations';
import { Button, FormContent, Input, Label } from './Form.styled';
import toast from 'react-hot-toast';
import { Spinner } from 'components/Loader/Spinner';

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
  } = useForm();

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
        Name{' '}
        <Input
          {...register('name', { required: true })}
          placeholder="Eddie van Halen"
        />
      </Label>
      <Label>
        Number{' '}
        <Input
          {...register('number', {
            required: true,
            minLength: {
              value: 9,
              message: 'Number must have 9 length',
            },
          })}
          placeholder="+38 (067) 1234567"
        />
      </Label>

      <p>{errors.number?.message}</p>
      {(isLoading && <Button type="submit">{<Spinner />}</Button>) || (
        <Button type="submit">Save</Button>
      )}
    </FormContent>
  );
};
