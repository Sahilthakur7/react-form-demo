import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import MainContainer from './MainContainer';
import Form from './Form';
import Input from './Input';
import PrimaryButton from './PrimaryButton';
import Typography from '@material-ui/core/Typography';
import { yupResolver } from '@hookform/resolvers/yup';

import { step1Schema } from '../validations';
import { useData } from '../context/DataContext';

const Step1 = () => {
  const { data, setValues } = useData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: 'onBlur',
    resolver: yupResolver(step1Schema),
  });
  const history = useHistory();

  const onSubmit = (data) => {
    history.push('/step2');
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography variant="h5" component="h2">
        Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          name="firstName"
          label="First Name"
          error={!!errors?.firstName}
          helperText={errors?.firstName?.message}
          {...register('firstName')}
        />
        <Input
          type="text"
          name="lastName"
          label="Last Name"
          {...register('lastName')}
          error={!!errors?.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton type="submit">Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
export default Step1;
