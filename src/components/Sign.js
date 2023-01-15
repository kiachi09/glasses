import React from 'react';
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
import { Link as RouterLink } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ThemeProvider } from '@mui/styles';
import FormikSetup from './FormikSetup';
const theme = createTheme();

const Sign = ({ title, initialValues, validationSchema, handleSubmit }) => {
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
						<FormikSetup
							title={title}
							initialValues={initialValues}
							validationSchema={validationSchema}
							handleSubmit={handleSubmit}
						/>
						<Grid container>
							<Grid item xs>
								{title === 'Sign In' && (
									<Link href="#" variant="body2">
										Forgot password?
									</Link>
								)}
							</Grid>
							<Grid item>
								<Link
									component={RouterLink}
									variant="body2"
									to={`${title === 'Sign In' ? '/signup' : '/signin'}`}
								>
									{`${
										title === 'Sign In' ? "Don't have" : 'Have'
									} an account? ${title === 'Sign In' ? 'Sign Up' : 'Sign In'}`}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default Sign;
