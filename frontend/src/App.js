import "./App.css";
import { useEffect, useState } from "react";
import ResponsiveAppBar from "./components/layout/ResponsiveAppBar.js";
import BodyPanel from "./components/layout/BodyPanel.js";

import { restoreSession } from "./api/auth";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [currentPage, setCurrentPage] = useState("HOME");

	useEffect(() => {
		const checkSession = async () => {
			const success = await restoreSession();
			setLoggedIn(success);
		};
		checkSession();
	}, []);
	return (
		<div className="App">
			<ResponsiveAppBar
				loggedIn={loggedIn}
				setLoggedIn={setLoggedIn}
				setCurrentPage={setCurrentPage}
			/>
			<BodyPanel
				loggedIn={loggedIn}
				currentPage={currentPage}
				setLoggedIn={setLoggedIn}
				setCurrentPage={setCurrentPage}
			></BodyPanel>
		</div>
	);
}

export default App;
