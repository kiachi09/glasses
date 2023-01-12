import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import 'yup-phone';
import {
	Grid,
	Button,
	TextField,
	FormControlLabel,
	Checkbox,
} from '@mui/material';

YupPassword(Yup);

const TextInput = props => {
	const [field, meta] = useField(props.name);
	return (
		<TextField
			error={Boolean(meta.touched && meta.error)}
			helperText={meta.touched && meta.error}
			margin="normal"
			fullWidth
			{...field}
			{...props}
		/>
	);
};

const FormikSetup = ({ value }) => {
	const requiredField = title => Yup.string().required(`${title} is required`);
	const title = value ? 'Sign In' : 'Create Account';
	return (
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				number: '',
				password: '',
				passwordconfirmation: '',
			}}
			validationSchema={Yup.object({
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
					.minWords(8, 'Must be at least 8 words'),
				passwordconfirmation: requiredField('Confirm Password').oneOf(
					[Yup.ref('password'), null],
					'Passwords must match',
				),
			})}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
			<Form as={FormControlLabel}>
				{value || (
					<div className="userDetails">
						<Grid item>
							<div className="firstName">
								<TextInput
									id="firstName"
									type="text"
									label="First Name"
									name="firstName"
									autoFocus
								/>
							</div>
						</Grid>
						<Grid item>
							<div className="lastName">
								<TextInput
									id="lastName"
									type="text"
									label="Last Name"
									name="lastName"
								/>
							</div>
						</Grid>
					</div>
				)}
				<Grid item>
					<TextInput
						label="Email Address"
						name="email"
						autoFocus={Boolean(value)}
						id="email"
						type="email"
					/>
				</Grid>

				{value || (
					<div className="number">
						<Grid item>
							<TextInput
								name="number"
								label="Phone Number"
								id="number"
								type="number"
							/>
						</Grid>
					</div>
				)}
				<Grid item>
					<TextInput
						name="password"
						label="Password"
						id="password"
						type="password"
					/>
				</Grid>
				{value || (
					<div className="passwordConfirm">
						<Grid item>
							<TextInput
								name="passwordconfirmation"
								label="Confirm Password"
								id="passwordconfirmation"
								type="password"
							/>
						</Grid>
					</div>
				)}
				{value && (
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
				)}
				<Button
					variant="contained"
					fullWidth
					sx={{ mt: 3, mb: 2 }}
					color="primary"
					type="submit"
					className="button-block"
				>
					{title}
				</Button>
			</Form>
		</Formik>
	);
};

export default FormikSetup;
