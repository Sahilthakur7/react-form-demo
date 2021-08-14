import { Typography } from '@material-ui/core';
import React from 'react';
import MainContainer from './MainContainer';
import Form from './Form';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useData } from '../context/DataContext';
import PrimaryButton from './PrimaryButton';
import { FileInput } from './FileInput';

export const Step3 = () => {
  const history = useHistory();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: data.files,
  });

  const onSubmit = (data) => {
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography variant="h5" component="h2">
        Step 3
      </Typography>
      <Form>
        <FileInput
          name="files"
          control={control}
          onSubmit={handleSubmit(onSubmit)}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
