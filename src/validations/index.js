import * as yup from 'yup';

export const step1Schema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is a required field'),
  lastName: yup
    .string()
    .required('Last name is a required field'),
});
