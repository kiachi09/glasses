import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
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
								<Field
									as={TextField}
									margin="normal"
									fullWidth
									id="firstName"
									type="text"
									label="First Name"
									name="firstName"
									autoFocus
								/>
								<ErrorMessage name="First Name is required" />
							</div>
						</Grid>
						<Grid item marginBottom={2}>
							<div className="lastName">
								<Field
									as={TextField}
									margin="normal"
									fullWidth
									id="lastName"
									type="text"
									label="Last Name"
									name="lastName"
								/>
								<ErrorMessage name="Last name is required" />
							</div>
						</Grid>
					</div>
				)}
				<Grid item>
					<Field
						as={TextField}
						margin="normal"
						fullWidth
						name="email"
						label="Email Address"
						id="email"
						type="email"
						autoFocus
						placeholder="Email address"
					/>
					<ErrorMessage name="Email address is required" />
				</Grid>
				{value || (
					<div className="number">
						<Grid item>
							<Field
								as={TextField}
								margin="normal"
								fullWidth
								name="number"
								label="Phone Number"
								id="number"
								type="number"
							/>
							<ErrorMessage name="Phone number is required" />
						</Grid>
					</div>
				)}
				<Grid item>
					<Field
						as={TextField}
						margin="normal"
						fullWidth
						name="password"
						label="Password"
						id="password"
						type="password"
					/>
					<ErrorMessage name="Password is required" />
				</Grid>
				{value || (
					<div className="passwordConfirm">
						<Grid item>
							<Field
								as={TextField}
								margin="normal"
								fullWidth
								name="passwordconfirmation"
								label="Confirm Password"
								id="passwordconfirmation"
								type="password"
							/>
							<ErrorMessage name="Confirm your password" />
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
