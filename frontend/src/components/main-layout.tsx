import { Sheet } from "@mui/joy";
import LoginOptions from "./login-options";
import FormPanel from "./form-panel";

export default function MainLayout() {
	return (
		<div id="main-screen">
			<div id="nav">
				<div id="rezoome-logo">rezoome</div>
				<LoginOptions />
			</div>
			<Sheet id="main-sheet">
				<FormPanel />
			</Sheet>
		</div>
	);
}
