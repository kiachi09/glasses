import Sign from '../components/Sign';
import * as Yup from 'yup';
import YupPassword from 'yup-password';


YupPassword(Yup);

const SignIn = () => {
	const title = 'Sign In';
	const requiredField = title => Yup.string().required(`${title} is required`);
	const initialValues = {
		validateOnMount: true,
		email: '',
		password: '',
	};
	const validationSchema = Yup.object({
		email: requiredField('Email Address').email('Invalid email address'),
		password: requiredField('Password')
			.password()
			.min(8, 'Must be at least 8 words'),
	});
	return (
		<Sign
			title={title}
			initialValues={initialValues}
			validationSchema={validationSchema}
		/>
	);
};

export default SignIn;
