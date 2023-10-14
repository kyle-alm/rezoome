import { Sheet } from "@mui/joy";
import LoginOptions from "./login-options";
import ResumeBuilder from "./resume-builder";

export default function MainLayout() {
	return (
		<div id="main-screen">
			<div id="nav">
				<div id="rezoome-logo">rezoome</div>
				<LoginOptions />
			</div>
			<Sheet id="main-sheet">
				<ResumeBuilder />
			</Sheet>
		</div>
	);
}
