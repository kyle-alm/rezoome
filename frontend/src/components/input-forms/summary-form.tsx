import { useState } from "react";
import TextBox from "../common/text-box";
import TextArea from "../common/text-area";
import Summary from "../../models/Summary";
import Button from "../common/button";
import getUniqueId from "../../utils/idprovider";

interface SummaryFormProps {
	readonly addSummary: (newSummary: Summary) => void;
}
export default function SummaryForm({ addSummary }: SummaryFormProps) {
	const [currentTitle, setCurrentTitle] = useState("");
	const [currentText, setCurrentText] = useState("");

	const handleNewSummary = () => {
		let id: number = getUniqueId();
		console.log(id);
		addSummary({ id: id, title: currentTitle, text: currentText });
		setCurrentTitle("");
		setCurrentText("");
	};

	return (
		<div className="input-form" id="summary-form">
			<TextBox
				value={currentTitle}
				label="Title"
				onChange={setCurrentTitle}
			/>
			<TextArea
				value={currentText}
				placeholder="Summary text..."
				onChange={setCurrentText}
			/>
			<div className="button-row">
				<Button text="Add Summary" onClick={() => handleNewSummary()} />
			</div>
		</div>
	);
}
