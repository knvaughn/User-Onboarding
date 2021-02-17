import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').strict(),
    password: Yup.string().required('Password is required').min(5, 'Password must be at least 5 characters in length'),
    termsOfService: Yup.boolean().oneOf([true]).required('Terms of service is required')
})

export default FormSchema;