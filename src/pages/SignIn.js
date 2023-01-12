import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import {
	Avatar,
	CssBaseline,
	Link,
	Box,
	Grid,
	Paper,
	Typography,
	createTheme,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ThemeProvider } from '@mui/styles';
import FormikSetup from '../components/FormikSetup';

const theme = createTheme();

const SignIn = () => {
	const [isLogin, setIsLogin] = React.useState(true);
	let value = isLogin;
	const title = isLogin ? 'Sign In' : 'Create Account';
	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{ height: '100vh' }}>
				<CssBaseline />
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage: 'url(https://source.unsplash.com/random)',
						backgroundRepeat: 'no-repeat',
						backgroundColor: t =>
							t.palette.mode === 'light'
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: 'cover',
						backgroundPosiion: 'center',
					}}
				/>
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<Box
						sx={{
							my: 12,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Avatar sx={{ m: 1, bgColor: 'secondary.main' }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							{title}
						</Typography>
						<Box component="form" noValidate sx={{ mt: 1 }}>
							<GoogleLogin
								onSuccess={credentialResponse => {
									console.log(credentialResponse);
								}}
								onError={() => {
									console.log('Login Failed');
								}}
							/>
							<FormikSetup value={value} />
							<Grid container>
								<Grid item xs>
									<Link href="#" variant="body2">
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link href="#" variant="body2"
										onClick={() => {
											setIsLogin(!isLogin);
											value = !value;
										}}
									>
										{isLogin ? 'Create Account' : 'Sign In'}
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default SignIn;
