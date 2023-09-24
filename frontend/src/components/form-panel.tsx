import { useState } from "react";
import Categories from "./categories";

export default function FormPanel() {
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(
		null
	);

	return (
		<div id="form-panel">
			<Categories
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			<div id="category-form-panel"></div>
		</div>
	);
}

export enum Category {
	User = "User",
	Main = "Main",
	Experience = "Experience",
	Education = "Education",
	Projects = "Projects",
	Skills = "Skills",
	Interests = "Interests",
	Awards = "Awards",
	Languages = "Languages",
	Certifications = "Certifications",
	References = "References",
}
