import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { signup } from "../../api/auth.js";

export default function SignUpPage({ setLoggedIn, setCurrentPage }) {
	const [email, setEmail] = useState("");
	const [emailHelperText, setEmailHelperText] = useState(" ");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const [validation, setValidation] = useState({
		email: true,
		password: false,
		password2: false,
	});

	const handlePressEnter = (event) => {
		if (event.key === "Enter") {
			handleSignup();
		}
	};

	const handleEmailChange = (event) => {
		const re = /\S+@\S+\.\S+/;
		const value = event.target.value;
		const valid = re.test(value);
		setEmailHelperText(valid ? " " : "Please enter a valid email address.");
		setEmail(value);
		setValidation({
			...validation,
			email: valid || value.length == 0,
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

	const handlePassword2Change = (event) => {
		const value = event.target.value;
		const valid = value == password;
		setPassword2(value);
		setValidation({
			...validation,
			password2: valid,
		});
	};

	const handleSignup = async () => {
		const result = await signup(email, password, rememberMe);
		if (result == true) {
			setLoggedIn(true);
			setCurrentPage("HOME");
		} else if (result == "email_exists") {
			setEmailHelperText("User with this email already exists.");
			setValidation({ ...validation, email: false });
			setEmail("");
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
					Sign Up
				</Typography>

				<TextField
					required
					label="Email"
					type="email"
					margin="normal"
					size="small"
					value={email}
					onChange={handleEmailChange}
					onKeyDown={handlePressEnter}
					error={!validation.email}
					helperText={emailHelperText}
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
				<TextField
					required
					label="Confirm Password"
					type="password"
					margin="normal"
					size="small"
					value={password2}
					onChange={handlePassword2Change}
					onKeyDown={handlePressEnter}
					error={password.length > 0 && !validation.password2}
					helperText={
						password.length > 0 && !validation.password2
							? "Must match password"
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
					onClick={handleSignup}
				>
					Sign Up
				</Button>
			</Box>
		</Container>
	);
}
