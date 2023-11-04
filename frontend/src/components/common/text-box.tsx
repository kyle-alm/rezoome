import { useState } from "react";

interface TextBoxProps {
	readonly value: string;
	readonly onChange: (newValue: string) => void;
	readonly label: string;
	readonly maxChars?: number;
}

export default function TextBox({
	value,
	onChange,
	label,
	maxChars,
}: TextBoxProps) {
	const [isFloat, setIsFloat] = useState(value.length > 0);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const newValue = event.target.value;
		if (maxChars == null || newValue.length <= maxChars) {
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
			{maxChars && (
				<div className="char-count">
					{value.length}/{maxChars}
				</div>
			)}
		</div>
	);
}
