import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { submitProfile } from "../../api/io.js";

const templateProfile = {
	fullName: "",
	phone: "",
	address: "",
	city: "",
	state: "",
	zipcode: "",
	website: "",
	portfolio: "",
	linkedin: "",
	github: "",
	twitter: "",
	instagram: "",
	facebook: "",
	email: "",
};

export default function ProfilePage({ setCurrentPage, userProfile }) {
	const [profile, setProfile] = useState({
		...templateProfile,
		...userProfile,
	});
	const [pageStep, setPageStep] = useState(0);

	const handleUpdateProfile = (event) => {
		event.preventDefault();
		let field = event.target.id;
		let value = event.target.value;
		let newProfile = { ...profile };
		newProfile[field] = value;
		setProfile(newProfile);
	};

	const handleSubmit = async () => {
		submitProfile(profile).then((response) => {
			setCurrentPage("HOME");
		});
	};

	return (
		<Container sx={{ display: "flex", justifyContent: "center" }}>
			<Box
				component="form"
				noValidate
				autoComplete="on"
				sx={{
					width: "400px",
					height: "600px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}
			>
				<Typography
					variant="h4"
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
					Your Profile
				</Typography>
				{pageStep === 0 && (
					<React.Fragment>
						<Typography
							variant="p"
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
							Let employers know how to reach you.
						</Typography>
						<TextField
							id="fullName"
							label="Full Name"
							variant="outlined"
							required={true}
							onChange={handleUpdateProfile}
							value={profile.fullName}
						/>
						<TextField
							id="phone"
							label="Phone"
							variant="outlined"
							required={true}
							onChange={handleUpdateProfile}
							value={profile.phone}
						/>
						<Box sx={{ height: "56px" }} />
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "flex-end",
							}}
						>
							<Button
								sx={{ width: "40px" }}
								onClick={() => setPageStep(1)}
							>
								Next
							</Button>
						</Box>
					</React.Fragment>
				)}
				{pageStep === 1 && (
					<React.Fragment>
						<Typography
							variant="p"
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
							Where do you live?
						</Typography>
						<TextField
							id="address"
							label="Street Address"
							variant="outlined"
							required={true}
							onChange={handleUpdateProfile}
							value={profile.address}
						/>
						<TextField
							id="city"
							label="City"
							variant="outlined"
							required={true}
							onChange={handleUpdateProfile}
							value={profile.city}
						/>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<TextField
								id="state"
								label="State"
								variant="outlined"
								required={true}
								onChange={handleUpdateProfile}
								value={profile.state}
								sx={{ mr: 1 }}
							/>
							<TextField
								id="zipcode"
								label="Zipcode"
								variant="outlined"
								required={true}
								onChange={handleUpdateProfile}
								value={profile.zipcode}
								sx={{ ml: 1 }}
							/>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<Button
								sx={{ width: "40px" }}
								onClick={() => setPageStep(0)}
							>
								Back
							</Button>
							<Button
								onClick={() => setPageStep(2)}
								sx={{ width: "40px" }}
							>
								Next
							</Button>
						</Box>
					</React.Fragment>
				)}
				{pageStep === 2 && (
					<React.Fragment>
						<Typography
							variant="p"
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
							Optional: Add any links you'd like to share.
						</Typography>
						<Accordion>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								Personal Website
							</AccordionSummary>
							<AccordionDetails>
								<TextField
									id="website"
									label="Website"
									variant="outlined"
									onChange={handleUpdateProfile}
									value={profile.website}
									sx={{ width: "100%" }}
								/>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								Portfolio Website
							</AccordionSummary>
							<AccordionDetails>
								<TextField
									id="portfolio"
									label="Portfolio"
									variant="outlined"
									onChange={handleUpdateProfile}
									value={profile.portfolio}
									sx={{ width: "100%" }}
								/>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								LinkedIn
							</AccordionSummary>
							<AccordionDetails>
								<TextField
									id="linkedin"
									label="LinkedIn"
									variant="outlined"
									onChange={handleUpdateProfile}
									value={profile.linkedin}
									sx={{ width: "100%" }}
								/>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								GitHub
							</AccordionSummary>
							<AccordionDetails>
								<TextField
									id="github"
									label="GitHub"
									variant="outlined"
									onChange={handleUpdateProfile}
									value={profile.github}
									sx={{ width: "100%" }}
								/>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								Twitter
							</AccordionSummary>
							<AccordionDetails>
								<TextField
									id="twitter"
									label="Twitter"
									variant="outlined"
									onChange={handleUpdateProfile}
									value={profile.twitter}
									sx={{ width: "100%" }}
								/>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								Instagram
							</AccordionSummary>
							<AccordionDetails>
								<TextField
									id="instagram"
									label="Instagram"
									variant="outlined"
									onChange={handleUpdateProfile}
									value={profile.instagram}
									sx={{ width: "100%" }}
								/>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								Facebook
							</AccordionSummary>
							<AccordionDetails>
								<TextField
									id="facebook"
									label="Facebook"
									variant="outlined"
									onChange={handleUpdateProfile}
									value={profile.facebook}
									sx={{ width: "100%" }}
								/>
							</AccordionDetails>
						</Accordion>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<Button
								sx={{ width: "40px" }}
								onClick={() => setPageStep(1)}
							>
								Back
							</Button>
							<Button
								sx={{ width: "40px" }}
								onClick={handleSubmit}
							>
								Finish
							</Button>
						</Box>
					</React.Fragment>
				)}
			</Box>
		</Container>
	);
}
