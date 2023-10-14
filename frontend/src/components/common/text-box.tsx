import { useState } from "react";

interface TextBoxProps {
	value: string;
	onChange: (newValue: string) => void;
	label: string;
	maxChars?: number;
}

export default function TextBox({
	value,
	onChange,
	label,
	maxChars,
}: TextBoxProps) {
	maxChars = maxChars ?? 1000;

	const [isFloat, setIsFloat] = useState(false);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const newValue = event.target.value;
		if (newValue.length <= maxChars!) {
			onChange(newValue);
		}
	}

	return (
		<div className="textbox-container">
			<label className={`floating-label ${isFloat ? "float" : ""}`}>
				{label}
			</label>
			<input
				className="textbox-input"
				type="text"
				value={value}
				onChange={handleChange}
				onFocus={() => setIsFloat(true)}
				onBlur={() => setIsFloat(value.length > 0)}
			/>
			<div className="char-count">
				{value.length}/{maxChars}
			</div>
		</div>
	);
}
