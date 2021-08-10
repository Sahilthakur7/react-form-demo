import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import MainContainer from './MainContainer';
import { Typography } from '@material-ui/core';
import Form from './Form';
import Input from './Input';
import { step2Schema } from '../validations';
import { useData } from '../context/DataContext';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { useHistory } from 'react-router';
import PrimaryButton from './PrimaryButton';

const Step2 = () => {
  const { data, setValues } = useData();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(step2Schema),
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
  });

  const hasPhone = watch('hasPhone');

  const onSubmit = (data) => {
    console.log('data-o---', data);
    setValues(data);
    // history.push('/step3');
  };

  console.log('hasPhone ????', hasPhone);

  return (
    <MainContainer>
      <Typography variant="h5" component="h2">
        Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          name="email"
          label="Email Name"
          error={!!errors?.email}
          helperText={errors?.email?.message}
          {...register('email')}
        />
        {/* <FormControlLabel
          control={
            <Checkbox
              defaultValue={data.hasPhone}
              defaultChecked={data.hasPhone}
              color="primary"
              name="hasPhone"
              {...register('hasPhone')}
            />
          } */}
        <Controller
          name="hasPhone"
          control={control}
          defaultValue={data.hasPhone}
          render={({ field }) => <Checkbox {...field} color="primary" />}
        />
        Do you have a phone?
        {hasPhone && (
          <Input
            type="text"
            name="phoneNumber"
            label="Phone Number"
            error={!!errors?.phoneNumber}
            helperText={errors?.phoneNumber?.message}
            {...register('phoneNumber')}
          />
        )}
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Step2;
