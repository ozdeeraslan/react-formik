# Form Validation with useFormik

This project is a basic example of using React Component useFormik.

useFormik() is a custom React hook that will return all Formik state and helpers directly.

## Installation Formik

You can install Formik with NPM, Yarn, or a good ol' <script> via unpkg.com.
Formik is compatible with React v15+ and works with ReactDOM and React Native.

```
 npm install formik --save
```

## Yup.js
Yup is a schema builder for runtime value parsing and validation. 

## Installation Yup
```
 npm install yup
```

## Getting Started
```
import * as yup from 'yup';

let userSchema = object({
  name: string().required(),
  age: number().required().positive().integer(),
  email: string().email(),
  website: string().url().nullable(),
  createdOn: date().default(() => new Date()),
});
```
