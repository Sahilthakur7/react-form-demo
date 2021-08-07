import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import MainContainer from './MainContainer';
import Form from './Form';
import Input from './Input';
import PrimaryButton from './PrimaryButton';

const Step1 = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    history.push('/step2');
  };

  console.log('not even here');

  return (
    <MainContainer>
      <h2>
        Step 1
        <Form>
          <Input
            type="text"
            name="firstName"
            label="First Name"
            {...register}
          />
          <Input type="text" name="lastName" label="Last Name" {...register} />
          <PrimaryButton type="submit">Next</PrimaryButton>
        </Form>
      </h2>
    </MainContainer>
  );
};

export default Step1;
