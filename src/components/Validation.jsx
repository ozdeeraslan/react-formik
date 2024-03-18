import * as yup from 'yup';

const Validation = yup.object().shape({
    email: yup.string().email('Please enter a valid email!').required(),
    password: yup.string().min(5).required(),
    passwordConfirm: yup.string().oneOf([yup.ref('password')]).required()

  });


  export default Validation;
  