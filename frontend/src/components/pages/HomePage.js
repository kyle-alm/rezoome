import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { getResume, getUserProfile } from "../../api/io.js";
import ResumeBuilder from "../ResumeBuilder.js";

function LoggedOutHome() {
	return (
		<Box>
			<Typography variant="h3" sx={{ mt: "1em" }}>
				Welcome to réZoomé
			</Typography>
			<Typography variant="h5" sx={{ mt: "1em" }}>
				Please log in or sign up to continue.
			</Typography>
		</Box>
	);
}

export default function HomePage({ loggedIn, setCurrentPage }) {
	const [resume, setResume] = useState(null);
	const [userProfile, setUserProfile] = useState(null);

	useEffect(() => {
		if (resume === null) {
			getResume().then((res) => {
				setResume(res.data);
			});
		}
		if (userProfile === null) {
			getUserProfile().then((res) => {
				if (res.status === 404) {
					return;
				}
				setUserProfile(res.data);
			});
		}
	}, []);
	return (
		<Container>
			{loggedIn ? null : <LoggedOutHome />}
			{userProfile === null ? (
				<Box>
					<Typography variant="h3" sx={{ mt: "1em" }}>
						Welcome to réZoomé
					</Typography>
					<Typography variant="h5" sx={{ mt: "1em" }}>
						Let's get started.
					</Typography>
					<Button onClick={() => setCurrentPage("PROFILE")}>
						Begin
					</Button>
				</Box>
			) : (
				<Box sx={{ mt: "3em" }}>
					<ResumeBuilder
						resume={resume}
						setResume={setResume}
						userProfile={userProfile}
						setUserProfile={setUserProfile}
					/>
				</Box>
			)}
		</Container>
	);
}
