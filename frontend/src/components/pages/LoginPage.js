import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { login } from "../../api/auth.js";

export default function LoginPage({ setLoggedIn, setCurrentPage, setProfile }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const [failure, setFailure] = useState(false);

	const [validation, setValidation] = useState({
		email: false,
		password: false,
	});

	const handlePressEnter = (event) => {
		if (event.key === "Enter") {
			handleLogin();
		}
	};

	const handleEmailChange = (event) => {
		const re = /\S+@\S+\.\S+/;
		const valid = re.test(event.target.value);
		setEmail(event.target.value);
		setValidation({
			...validation,
			email: valid,
		});
	};

	const handlePasswordChange = (event) => {
		const value = event.target.value;
		const valid = value.length > 7 && /.*\d+.*/.test(value);
		setPassword(value);
		setValidation({
			...validation,
			password: valid,
		});
	};

	const handleLogin = async () => {
		const success = await login(email, password, rememberMe);
		console.log(success);
		if (success !== false) {
			setLoggedIn(true);
			if (success === null || success === undefined) {
				setProfile({ email: email });
				setCurrentPage("PROFILE");
			} else {
				setProfile(success);
				setCurrentPage("GENERATE");
			}
		} else {
			setFailure(true);
		}
	};

	return (
		<Container sx={{ display: "flex", justifyContent: "center" }}>
			<Box
				sx={{
					maxWidth: "400px",
					display: "flex",
					flexDirection: "column",
					my: 4,
				}}
			>
				<Typography
					variant="h5"
					noWrap
					sx={{
						mr: 2,
						my: 1,
						fontWeight: 700,
						color: "black",
						textTransform: "none",
						textDecoration: "none",
						textAlign: "left",
					}}
				>
					Please log in
				</Typography>
				<Collapse in={failure}>
					<Alert
						severity="error"
						sx={{ display: failure ? "block" : "none" }}
					>
						Email and password not found.
					</Alert>
				</Collapse>
				<TextField
					required
					label="Email"
					type="email"
					margin="normal"
					size="small"
					value={email}
					onChange={handleEmailChange}
					onKeyDown={handlePressEnter}
					error={email.length > 0 && !validation.email}
					helperText={
						email.length > 0 && !validation.email
							? "Provide a valid email address"
							: " "
					}
				/>
				<TextField
					required
					label="Password"
					type="password"
					margin="normal"
					size="small"
					value={password}
					onChange={handlePasswordChange}
					onKeyDown={handlePressEnter}
					error={password.length > 0 && !validation.password}
					helperText={
						password.length > 0 && !validation.password
							? "Minimum 8 characters, 1 numeric"
							: " "
					}
				/>
				<FormControlLabel
					control={<Switch />}
					label="Remember me"
					sx={{ mb: 2 }}
					value={rememberMe}
					onChange={(e) => setRememberMe(e.target.checked)}
				/>
				<Button
					variant="contained"
					sx={{ my: 1 }}
					disabled={!(validation.email && validation.password)}
					onClick={handleLogin}
				>
					Submit
				</Button>
			</Box>
		</Container>
	);
}
