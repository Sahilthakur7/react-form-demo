import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import MainContainer from './MainContainer';
import Form from './Form';
import Input from './Input';
import PrimaryButton from './PrimaryButton';
import Typography from '@material-ui/core/Typography';
import { yupResolver } from '@hookform/resolvers/yup';

import { step1Schema } from '../validations';

const Step1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(step1Schema),
  });
  const history = useHistory();

  const onSubmit = (data) => {
    history.push('/step2');
  };

  console.log('errors', errors);

  return (
    <MainContainer>
      <Typography variant="h5" component="h2">
        Step 1
      </Typography>
      <Form>
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
