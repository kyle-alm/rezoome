interface ButtonProps {
	text: string;
	iconClass?: string; // Optional icon class for Font Awesome or other icons
	onClick: () => void;
}

export default function Button({ text, iconClass, onClick }: ButtonProps) {
	return (
		<button
			className="custom-button"
			onClick={onClick}
			onMouseDown={(e) => {
				(e.target as HTMLElement).classList.add("pressed");
			}}
			onMouseUp={(e) => {
				(e.target as HTMLElement).classList.remove("pressed");
			}}
			onMouseLeave={(e) => {
				(e.target as HTMLElement).classList.remove("pressed");
			}}
		>
			{iconClass && <i className={iconClass}></i>}
			{text}
		</button>
	);
}
