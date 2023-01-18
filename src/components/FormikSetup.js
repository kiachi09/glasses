import React from 'react';
import { Formik, Form, useField } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { UserAuth } from '../context/AuthContext';
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

const FormikSetup = ({ title, initialValues, validationSchema }) => {
	const { createUser, signIn } = UserAuth();
	const navigate = useNavigate();

	const handleSubmit = async values => {
		try {
			if (title === 'Sign In') {
				await signIn(values.email, values.password);
			} else if (title === 'Create Account') {
				await createUser(values.email, values.password);
			}
			navigate('/dashboard');
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={values => handleSubmit(values)}
		>
			{formik => (
				<Form as={FormControlLabel}>
					<Grid item></Grid>
					{title === 'Sign In' || (
						<div className="userDetails">
							<Grid item>
								<div className="firstName">
									<TextInput
										id="firstName"
										type="text"
										label="First Name"
										name="firstName"
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
							id="email"
							type="email"
						/>
					</Grid>
					<Grid item>
						{title === 'Sign In' || (
							<div className="number">
								<TextInput
									name="number"
									label="Phone Number"
									id="number"
									type="number"
								/>
							</div>
						)}
					</Grid>
					<Grid item>
						<TextInput
							name="password"
							label="Password"
							id="password"
							type="password"
						/>
					</Grid>
					<Grid item>
						{title === 'Sign In' || (
							<div className="passwordConfirm">
								<TextInput
									name="passwordconfirmation"
									label="Confirm Password"
									id="passwordconfirmation"
									type="password"
								/>
							</div>
						)}
					</Grid>
					{title === 'Sign In' && (
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
						disabled={!formik.isValid}
					>
						{title}
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default FormikSetup;
