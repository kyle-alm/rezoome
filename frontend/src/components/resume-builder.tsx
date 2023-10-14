import { useState } from "react";
import Categories from "./resume_builder/categories";
import DisplayCurrentList from "./resume_builder/display-current-list";
import InputForm from "./resume_builder/input-form";

export default function ResumeBuilder() {
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(
		null
	);

	return (
		<div id="form-panel">
			<Categories
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			<div id="category-form-panel">
				<DisplayCurrentList category={selectedCategory} />
				<InputForm category={selectedCategory} />
			</div>
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
