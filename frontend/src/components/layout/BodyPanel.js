import React, { useState } from "react";
import LoginPage from "../pages/LoginPage.js";
import SignUpPage from "../pages/SignUpPage.js";
import HomePage from "../pages/HomePage.js";
import ProfilePage from "../pages/ProfilePage.js";

export default function BodyPanel({
	currentPage,
	loggedIn,
	setLoggedIn,
	setCurrentPage,
}) {
	const [userProfile, setUserProfile] = useState({});
	return (
		<React.Fragment>
			{currentPage === "LOG IN" && (
				<LoginPage
					setLoggedIn={setLoggedIn}
					setCurrentPage={setCurrentPage}
					setProfile={setUserProfile}
				/>
			)}
			{currentPage === "SIGN UP" && (
				<SignUpPage
					setLoggedIn={setLoggedIn}
					setCurrentPage={setCurrentPage}
				/>
			)}
			{currentPage === "HOME" && (
				<HomePage setCurrentPage={setCurrentPage} loggedIn={loggedIn} />
			)}
			{currentPage === "PROFILE" && (
				<ProfilePage
					setCurrentPage={setCurrentPage}
					userProfile={userProfile}
				/>
			)}
		</React.Fragment>
	);
}
