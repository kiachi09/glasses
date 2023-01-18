import React from 'react';
import Sign from '../components/Sign';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import 'yup-phone';


YupPassword(Yup);

const CreateAccount = () => {
	const title = 'Create Account';
	const requiredField = title => Yup.string().required(`${title} is required`);
	const initialValues = {
		validateOnMount: true,
		firstName: '',
		lastName: '',
		email: '',
		number: '',
		password: '',
		passwordconfirmation: '',
	};
	const validationSchema = Yup.object({
		firstName: requiredField('First Name')
			.matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
			.min(3, 'First title must be atleast 3 characters')
			.max(10, "First title can't be more than 10 characters"), // we can only let letters and spaces
		lastName: requiredField('Last Name')
			.matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
			.min(3, 'First title must be atleast 3 characters'), // we can only let letters and spaces
		email: requiredField('Email').email('Invalid email address'),
		number: requiredField('Phone Number').phone(),
		password: requiredField('Password')
			.password()
			.min(8, 'Must be at least 8 characters'),
		passwordconfirmation: requiredField('Confirm Password').oneOf(
			[Yup.ref('password'), null],
			'Passwords must match',
		),
	});

	return (
		<Sign
			title={title}
			initialValues={initialValues}
			validationSchema={validationSchema}
		/>
	);
};
export default CreateAccount;
