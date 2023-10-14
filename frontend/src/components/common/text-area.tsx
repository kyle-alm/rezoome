interface TextAreaProps {
	value: string;
	onChange: (newValue: string) => void;
	maxChars?: number;
	placeholder?: string;
}

export default function TextArea({
	value,
	onChange,
	maxChars,
	placeholder,
}: TextAreaProps) {
	maxChars = maxChars ?? 1000;
	placeholder = placeholder ?? "";

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newValue = event.target.value;
		if (newValue.length <= maxChars!) {
			onChange(newValue);
		}
	};

	return (
		<div className="textarea-container">
			<textarea
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				className="custom-textarea"
			/>
			<div className="char-count">
				{value.length}/{maxChars}
			</div>
		</div>
	);
}
