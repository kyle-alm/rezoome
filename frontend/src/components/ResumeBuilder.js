import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItem";
import resumeInterface from "../common/resume-interface.js";
import {
	Checkbox,
	Select,
	TextField,
	MenuItem,
	InputLabel,
	FormControl,
} from "@mui/material";
import { useState } from "react";

export default function ResumeBuilder({
	resume,
	setResume,
	userProfile,
	setUserProfile,
	setCurrentPage,
}) {
	const [category, setCategory] = useState("None");

	const handleSelectCategory = (event) => {
		console.log(event.target);
		setCategory(event.target.title);
	};
	console.log(resumeInterface);
	return (
		<Paper>
			<Container sx={{ display: "flex", flexDirection: "row" }}>
				<List sx={{ cursor: "pointer" }}>
					<ListItemButton
						title="Profile"
						onClick={handleSelectCategory}
					>
						{userProfile === null
							? "Profile"
							: userProfile.full_name}
					</ListItemButton>
					<Divider />
					{Object.keys(resumeInterface).map((item) => {
						return item !== "Profile" && !item.includes("_") ? (
							<ListItemButton
								title={item}
								onClick={handleSelectCategory}
							>
								{item}
							</ListItemButton>
						) : null;
					})}
				</List>
				<Container
					sx={{ display: "flex", flexDirection: "column", py: 2 }}
				>
					<Box sx={{ flexGrow: 1 }}></Box>
					<Box>
						{resumeInterface[category]?.Fields.map((item) => {
							return (
								<div key={item.id}>
									{[
										"char",
										"email",
										"phone",
										"address",
										"zipcode",
										"email",
										"url",
									].includes(item.type) ? (
										<TextField
											name={item.id}
											label={item.label}
											type={item.type}
											sx={{ m: 1, minWidth: "10em" }}
										/>
									) : null}
									{item.type === "date" ? (
										<TextField
											name={item.id}
											label={item.label}
											type={item.type}
											sx={{ m: 1, minWidth: "10em" }}
											InputLabelProps={{ shrink: true }}
										/>
									) : null}
									{item.type === "text" ? (
										<TextField
											name={item.id}
											label={item.label}
											multiline
											rows={4}
											sx={{ m: 1, minWidth: "30em" }}
										/>
									) : null}
									{item.type === "select" ? (
										<FormControl sx={{ m: 1 }}>
											<InputLabel
												id={"select_" + item.id}
											>
												{item.label}
											</InputLabel>
											<Select
												name={item.id}
												labelId={"select_" + item.id}
												label={item.label}
												sx={{ minWidth: "10em" }}
												variant="outlined"
											>
												{item.options.map((choice) => {
													return (
														<MenuItem
															value={choice}
															key={choice}
														>
															{choice}
														</MenuItem>
													);
												})}
											</Select>
										</FormControl>
									) : null}
									{item.type === "bool" ? (
										<Checkbox
											name={item.id}
											label={item.label}
											sx={{ m: 1 }}
										/>
									) : null}
								</div>
							);
						})}
					</Box>
				</Container>
			</Container>
		</Paper>
	);
}
