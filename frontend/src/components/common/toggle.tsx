interface ToggleProps {
	checked: boolean;
	onChange: (isChecked: boolean) => void;
}

export default function Toggle({ checked, onChange }: ToggleProps) {
	const handleToggle = () => {
		onChange(!checked);
	};

	return (
		<label className="toggle-switch">
			<input
				type="checkbox"
				checked={checked}
				onChange={handleToggle}
				className="checkbox"
			/>
			<div className="slider" />
		</label>
	);
}
