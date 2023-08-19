import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { logout } from "../../api/auth.js";

function ResponsiveAppBar({ loggedIn, setLoggedIn, setCurrentPage }) {
	const pages = loggedIn ? ["LOG OUT"] : ["LOG IN", "SIGN UP"];
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleClickNavItem = (event) => {
		setAnchorElNav(null);
		const page = event.target.innerText;
		switch (page) {
			case "réZoomé":
				setCurrentPage("HOME");
				break;
			case "LOG OUT":
				logout()
					.then((res) => {
						setLoggedIn(false);
						setCurrentPage("Home");
					})
					.catch((err) => {
						console.log(err);
					});
				break;
			default:
				setCurrentPage(page);
		}
	};

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Button onClick={handleClickNavItem}>
						<Typography
							variant="h6"
							noWrap
							sx={{
								mr: 2,
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "white",
								textTransform: "none",
								textDecoration: "none",
							}}
						>
							réZoomé
						</Typography>
					</Button>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
							justifyContent: "flex-end",
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
							sx={{ my: 1.4 }}
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page}
									onClick={handleClickNavItem}
								>
									<Typography textAlign="center">
										{page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							justifyContent: "flex-end",
						}}
					>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleClickNavItem}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{page}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
