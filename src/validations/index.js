import * as yup from 'yup';

export const step1Schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'First name should not contain numeric characters')
    .required('First name is a required field'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Last name should not contain numeric characters')
    .required('Last name is a required field'),
});

export const step2Schema = yup.object().shape({
  email: yup
    .string()
    .email('Should have correct email format')
    .required('First name is a required field'),
});
